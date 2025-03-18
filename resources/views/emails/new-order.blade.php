<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .order-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ca8a04;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Yeni Sipariş Alındı!</h1>
        </div>

        <div class="order-info">
            <h2>Sipariş Detayları</h2>
            <p><strong>Sipariş No:</strong> #{{ $order->id }}</p>
            <p><strong>Tarih:</strong> {{ $order->created_at->format('d.m.Y H:i') }}</p>
            <p><strong>Müşteri:</strong> {{ $order->customer_name }}</p>
            <p><strong>Toplam Tutar:</strong> {{ number_format($order->total_amount * 1.18, 2) }} TL (KDV Dahil)</p>
        </div>

        <p>Sipariş detaylarını görmek için ekteki PDF dosyasını inceleyebilirsiniz.</p>

        <p>Saygılarımızla,<br>Zehir Motor</p>
    </div>
</body>
</html> 