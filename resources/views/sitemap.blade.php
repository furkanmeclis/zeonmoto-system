
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ url('/') }}</loc>
        <lastmod>{{ now()->toAtomString() }}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    @foreach ($activeProducts as $product)
    <url>
        <loc>{{ $product['url'] }}</loc>
        <lastmod>{{ $product['lastmod'] }}</lastmod>
        <changefreq>{{ $product['changefreq'] }}</changefreq>
        <priority>{{ $product['priority'] }}</priority>
    </url>
    @endforeach
</urlset>
