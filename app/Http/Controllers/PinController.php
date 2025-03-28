<?php

namespace App\Http\Controllers;

use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Response;

class PinController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pins = Pin::all();
        return Inertia::render('Pins/Index', [
            'pins' => $pins
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:pins,username',
            'pin' => 'required|string|size:6|regex:/^[0-9]+$/',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        Pin::create([
            'username' => $request->username,
            'pin' => $request->pin,
        ]);

        return redirect()->route('pins.index')->with('success', 'PIN başarıyla oluşturuldu.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $pin = Pin::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|unique:pins,username,' . $id,
            'pin' => 'required|string|size:6|regex:/^[0-9]+$/',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $pin->update([
            'username' => $request->username,
            'pin' => $request->pin,
        ]);

        return redirect()->route('pins.index')->with('success', 'PIN başarıyla güncellendi.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $pin = Pin::findOrFail($id);
        $pin->delete();

        return redirect()->route('pins.index')->with('success', 'PIN başarıyla silindi.');
    }
    
    /**
     * Check if a PIN is valid.
     */
    public function checkPin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pin' => 'required|string|size:6|regex:/^[0-9]+$/',
        ]);

        if ($validator->fails()) {
            return Response::json([
                'valid' => false,
                'message' => 'Geçersiz PIN formatı.'
            ], 400);
        }

        $pin = Pin::where('pin', $request->pin)->first();
        
        if ($pin) {
            return Response::json([
                'valid' => true,
                'message' => 'PIN doğrulandı.'
            ]);
        }
        
        return Response::json([
            'valid' => false,
            'message' => 'Geçersiz PIN.'
        ]);
    }
}
