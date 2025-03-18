<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sipariş #{{ $order->id }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #374151;
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
        }
        .container {
            padding: 20px;
        }
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 15px;
            margin-bottom: 20px;
        }
        .header-card {
            background: #ca8a04;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        .header-card h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }
        .header-card .order-info {
            margin-top: 10px;
            font-size: 14px;
            opacity: 0.9;
        }
        .card-title {
            font-size: 16px;
            font-weight: bold;
            color: #ca8a04;
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #ca8a04;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            font-size: 11px;
        }
        .info-item {
            margin-bottom: 8px;
        }
        .info-label {
            font-weight: bold;
            color: #4b5563;
            display: block;
            margin-bottom: 2px;
        }
        .info-value {
            color: #1f2937;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
        }
        th {
            background-color: #fef3c7;
            color: #92400e;
            padding: 8px;
            text-align: left;
            font-weight: bold;
        }
        td {
            padding: 8px;
            border-bottom: 1px solid #e5e7eb;
            color: #1f2937;
        }
        tr:last-child td {
            border-bottom: none;
        }
        .totals-card {
            float: none;
            width: 100%;
            margin-top: 20px;
        }
        .totals-wrapper {
            float: right;
            width: 250px;
        }
        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            font-size: 11px;
        }
        .total-row.final {
            font-weight: bold;
            color: #ca8a04;
            font-size: 14px;
            padding-top: 8px;
            margin-top: 5px;
            border-top: 2px solid #ca8a04;
        }
        .footer-card {
            text-align: center;
            font-size: 10px;
            color: #6b7280;
            margin-top: 30px;
            padding: 15px;
            clear: both;
        }
        .status-badge {
            display: inline-block;
            padding: 4px 8px;
            background: #fef3c7;
            color: #92400e;
            border-radius: 4px;
            font-size: 11px;
            font-weight: bold;
            margin-top: 5px;
        }
        .divider {
            height: 1px;
            background: #e5e7eb;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header-card">
            <h1>Zehir Motor</h1>
            <div class="order-info">
                <div>Sipariş No: #{{ $order->id }}</div>
                <div>{{ $order->created_at->format('d.m.Y H:i') }}</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Müşteri Kartı</div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Ad Soyad</span>
                    <span class="info-value">{{ $order->customer_name }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Telefon</span>
                    <span class="info-value">{{ $order->customer_phone }}</span>
                </div>
                @if($order->customer_email)
                <div class="info-item">
                    <span class="info-label">E-posta</span>
                    <span class="info-value">{{ $order->customer_email }}</span>
                </div>
                @endif
                <div class="info-item">
                    <span class="info-label">Adres</span>
                    <span class="info-value">{{ $order->customer_address }}</span>
                </div>
            </div>
            @if($order->note)
            <div class="divider"></div>
            <div class="info-item">
                <span class="info-label">Sipariş Notu</span>
                <span class="info-value">{{ $order->note }}</span>
            </div>
            @endif
        </div>

        <div class="card">
            <div class="card-title">Sipariş Detayları</div>
            <table>
                <thead>
                    <tr>
                        <th>Ürün Kodu</th>
                        <th>Ürün Adı</th>
                        <th style="text-align: center;">Adet</th>
                        <th style="text-align: right;">Birim Fiyat</th>
                        <th style="text-align: right;">Toplam</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($order->items as $item)
                        <tr>
                            <td>{{ $item['sku'] }}</td>
                            <td>{{ $item['name'] }}</td>
                            <td style="text-align: center;">{{ $item['quantity'] }}</td>
                            <td style="text-align: right;">{{ number_format($item['price'], 2) }} TL</td>
                            <td style="text-align: right;">{{ number_format($item['price'] * $item['quantity'], 2) }} TL</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <div class="totals-card card">
            <div class="totals-wrapper">
                <div class="card-title">Ödeme Özeti</div>
                <div class="total-row">
                    <span>Toplam:</span>
                    <span>{{ number_format($order->total_amount, 2) }} TL</span>
                </div>
                
            </div>
        </div>

        <div class="footer-card card">
            <strong>Bizi tercih ettiğiniz için teşekkür ederiz!</strong>
            <div class="divider"></div>
            <div>Zehir Motor</div>
            <div>Tel: 0545 887 01 47</div>
            <div>E-posta: info@zehirmotor.com</div>
        </div>
    </div>
</body>
</html> 