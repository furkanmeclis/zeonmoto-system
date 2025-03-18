<?php

namespace App\Http\Controllers;

use App\Models\Groups;
use App\Services\VatanSmsService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Group/Index', [
            'groupsAll' => Groups::getAllGroups()
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Group/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        $customers = explode(',', $request->input('customers'));
        if (Groups::where('name', $name)->first()) {
            return response()->json([
                'message' => 'Bu isimde bir grup zaten mevcut',
                'status' => false
            ]);
        } else {
            $group = new Groups();
            $group->name = $name;
            if ($group->save()) {
                foreach ($customers as $customer) {
                    if (!$group->addMember($customer)) {
                        $group->delete();
                    }
                }
                return response()->json([
                    'message' => 'Grup başarıyla oluşturuldu',
                    'status' => true
                ]);
            } else {
                return response()->json([
                    'message' => 'Grup oluşturulurken bir hata oluştu',
                    'status' => false
                ]);
            }

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $group = Groups::getGroup($id);
        if (!$group) {
            return redirect()->route('groups.index');
        }
        return Inertia::render('Group/Show', [
            'group' => $group
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $group = Groups::getGroup($id);
        if (!$group) {
            return redirect()->route('groups.index');
        }
        return Inertia::render('Group/Edit', [
            'groupEdit' => $group
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $group = Groups::find($id);
        if ($group) {
            $name = $request->input('name');
            $customers = explode(',', $request->input('customers'));
            $group->name = $name;
            if ($group->save()) {
                $group->deleteAllMembers();
                foreach ($customers as $customer) {
                    if (!$group->addMember($customer)) {
                        $group->delete();
                    }
                }
                return response()->json([
                    'message' => 'Grup başarıyla güncellendi',
                    'status' => true,
                    'group' => Groups::getGroup($group->id)
                ]);
            } else {
                return response()->json([
                    'message' => 'Grup güncellenirken bir hata oluştu',
                    'status' => false
                ]);
            }
        } else {
            return response()->json([
                'message' => 'Grup bulunamadı',
                'status' => false
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $group = Groups::find($id);
        if ($group) {
            if ($group->delete()) {
                return response()->json([
                    'message' => 'Grup başarıyla silindi',
                    'status' => true
                ]);
            } else {
                return response()->json([
                    'message' => 'Grup silinirken bir hata oluştu',
                    'status' => false
                ]);
            }
        } else {
            return response()->json([
                'message' => 'Grup bulunamadı',
                'status' => false
            ]);
        }
    }

    public function sendMessage($id)
    {
        $group = Groups::getGroup($id);
        if (!$group) {
            return response()->json([
                'message' => 'Grup bulunamadı',
                'status' => false
            ]);
        } else {
            $message = request()->input('message');
            $customers = $group->members();
            $phones = [];
            foreach ($customers as $customer) {
                $phones[] = $customer->phone;
            }
            $sms = \App\Services\VatanSmsService::sendSms($phones, $message);
            return response()->json(["message" => "Mesaj Gönderildi", "status" => true, "sms" => $sms]);
        }
    }

    public function import(Request $request): \Illuminate\Http\JsonResponse
    {

        try {
            $request->validate([
                'file' => 'required|mimes:xlsx,xls'
            ]);
            $data = Excel::toArray((object)[], $request->file('file'));
            $data = $data[0];
            $columns = $data[0];
            $demoData = array_slice($data, 1, 10);
            $filePath = storage_path('app/importData.json');
            file_put_contents($filePath, json_encode($data));
            return response()->json([
                'message' => 'Veriler başarıyla yüklendi',
                'status' => true,
                'columns' => $columns,
                'demoData' => $demoData,
                'count' => count($data) - 1
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Dosya formatı hatalı',
                'status' => false
            ]);
        }
    }

    public function importSend(Request $request): \Illuminate\Http\JsonResponse
    {
        $filePath = storage_path('app/importData.json');
        if (!file_exists($filePath)) {
            return response()->json(['message' => 'Veri bulunamadı', 'status' => false]);
        }
        $data = json_decode(file_get_contents($filePath), true);
        $phones = [];
        $message = $request->input('message');
        $selectedColumn = $request->input('selectedColumn');
        foreach ($data as $key => $item) {
            if ($key == 0) {
                continue;
            }
            if (!empty($item[$selectedColumn]) && VatanSmsService::formatPhoneNumber($item[$selectedColumn]) != null) {
                $phones[] = VatanSmsService::formatPhoneNumber($item[$selectedColumn]);
            }
        }
        VatanSmsService::sendSms($phones, $message);
        unlink($filePath);
        return response()->json([
            'message' => count($phones) . " Adet SMS Gönderimi Başlatıldı",
            'status' => true,
        ]);
    }
}
