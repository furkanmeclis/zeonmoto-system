<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Mail\NewOrderMail;
use App\Mail\CustomerOrderMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'customer_name' => 'required|string|max:255',
            'customer_phone' => 'required|string|max:20',
            'customer_email' => 'nullable|email|max:255',
            'customer_address' => 'required|string',
            'note' => 'nullable|string',
            'items' => 'required|array',
            'items.*.id' => 'required|integer',
            'items.*.name' => 'required|string',
            'items.*.price' => 'required|numeric',
            'items.*.quantity' => 'required|integer|min:1',
            'total_amount' => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $order = Order::create([
                'customer_name' => $request->customer_name,
                'customer_phone' => $request->customer_phone,
                'customer_email' => $request->customer_email,
                'customer_address' => $request->customer_address,
                'note' => $request->note,
                'items' => $request->items,
                'total_amount' => $request->total_amount,
                'status' => 'pending'
            ]);

            $pdf = PDF::loadView('pdf.order', ['order' => $order]);
            $pdfPath = storage_path('app/public/orders/order-' . $order->uid . '.pdf');
            
            Storage::makeDirectory('public/orders');
            $pdf->save($pdfPath);

            $admins = User::whereIn('role', ['admin'])->get();

            foreach ($admins as $admin) {
                Mail::to($admin->email)->send(new NewOrderMail($order, $pdfPath));
            }

            if ($order->customer_email) {
                Mail::to($order->customer_email)->send(new CustomerOrderMail($order, $pdfPath));
            }
            $pdfUrl = Storage::url('orders/order-' . $order->uid . '.pdf');
            return response()->json([
                'status' => true,
                'message' => 'Order created successfully',
                'data' => [
                    'id' => $order->id,
                    'uid' => $order->uid,
                    'pdf_url' => $pdfUrl
                ]
            ]);
        } catch (\Exception $e) {
            if (isset($pdfPath) && file_exists($pdfPath)) {
                unlink($pdfPath);
            }

            return response()->json([
                'status' => false,
                'message' => 'An error occurred while creating the order',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
