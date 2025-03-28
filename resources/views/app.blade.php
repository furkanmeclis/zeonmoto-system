<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @if(isset($meta))
            <title>{{ $meta['title'] }}</title>
            <meta name="description" content="{{ $meta['description'] }}">
            <meta name="keywords" content="{{ $meta['keywords'] }}">
            <meta property="og:title" content="{{ $meta['ogTitle'] }}">
            <meta property="og:description" content="{{ $meta['ogDescription'] }}">
            <meta property="og:image" content="{{ $meta['ogImage'] }}">
            <meta property="og:url" content="{{ $meta['ogUrl'] }}">
            <meta name="twitter:card" content="summary_large_image">
            <link rel="canonical" href="{{ $meta['canonicalUrl'] }}">
        @else
            <title inertia>{{ config('app.name', 'Zehir Motor') }}</title>
        @endif

        @if(!isset($meta))
        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url('/') }}">
        @endif

        <!-- Favicon and PWA Icons -->
        <link rel="icon" type="image/png" href="/logo.png">
        <link rel="apple-touch-icon" href="/logo.png">
        <meta name="theme-color" content="#eab308">

        <!-- PWA Manifest -->
        <link rel="manifest" href="/manifest.json">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <!-- Google Analytics -->
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5B9Q9SZJ6H"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
        </script>
    </head>
    <body class="font-sans antialiased">
        <noscript>Bu web sitesini tam olarak görüntüleyebilmek için JavaScript'i etkinleştirmeniz gerekmektedir.</noscript>
        @inertia
    </body>
</html>
