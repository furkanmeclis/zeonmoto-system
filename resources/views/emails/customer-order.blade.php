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
        .thank-you {
            text-align: center;
            font-size: 1.2em;
            color: #ca8a04;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Siparişiniz Alındı!</h1>
        </div>

        <div class="thank-you">
            Sayın {{ $order->customer_name }}, siparişiniz için teşekkür ederiz.
        </div>

        <div class="order-info">
            <h2>Sipariş Detayları</h2>
            <p><strong>Sipariş No:</strong> #{{ $order->id }}</p>
            <p><strong>Tarih:</strong> {{ $order->created_at->format('d.m.Y H:i') }}</p>
            <p><strong>Toplam Tutar:</strong> {{ number_format($order->total_amount * 1.18, 2) }} TL (KDV Dahil)</p>
        </div>

        <p>Siparişinizin detaylarını ekteki PDF dosyasında bulabilirsiniz.</p>

        <p>En kısa sürede sizinle iletişime geçeceğiz.</p>

        <p>Bizi tercih ettiğiniz için teşekkür ederiz.</p>

        <p>Saygılarımızla,<br>Zehir Motor</p>
    </div>
</body>
</html> 