<?php

namespace App\Http\Controllers;

use App\Services\PriceRuleService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PriceRuleController extends Controller
{
    public function index()
    {
        return Inertia::render('PriceRules/Index', [
            'rules' => PriceRuleService::getRules()
        ]);
    }

    public function update(Request $request)
    {
        $rules = $request->validate([
            'rules' => 'required|array',
            'rules.*.min' => 'required|numeric',
            'rules.*.max' => 'nullable|numeric',
            'rules.*.multiplier' => 'required|numeric|min:0'
        ])['rules'];

        PriceRuleService::updateRules($rules);

        return redirect()->back()->with('success', 'Fiyat kuralları güncellendi.');
    }
} 