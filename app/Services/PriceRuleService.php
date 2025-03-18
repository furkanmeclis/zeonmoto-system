<?php

namespace App\Services;

class PriceRuleService
{
    public static function getRules()
    {
        $path = config_path('price_rules.json');
        if (!file_exists($path)) {
            return [];
        }
        return json_decode(file_get_contents($path), true)['rules'] ?? [];
    }

    public static function calculatePrice($price)
    {
        $rules = self::getRules();
        
        foreach ($rules as $rule) {
            $min = $rule['min'];
            $max = $rule['max'];
            $multiplier = $rule['multiplier'];

            if ($price > $min && ($max === null || $price <= $max)) {
                return round($price * $multiplier, 2);
            }
        }

        return $price;
    }

    public static function updateRules($rules)
    {
        $path = config_path('price_rules.json');
        return file_put_contents($path, json_encode(['rules' => $rules], JSON_PRETTY_PRINT));
    }
} 