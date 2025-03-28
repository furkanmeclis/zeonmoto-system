export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(amount);
};
export const appendHead = (data) => {
    let _head = document.querySelector('head');

    if (data.description) {
        let desc = _head.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', data.description);
        else _head.insertAdjacentHTML('beforeend', `<meta name="description" content="${data.description}">`);
    }

    if (data.keywords) {
        let keywords = _head.querySelector('meta[name="keywords"]');
        if (keywords) keywords.setAttribute('content', data.keywords);
        else _head.insertAdjacentHTML('beforeend', `<meta name="keywords" content="${data.keywords}">`);
    }

    if (data.ogTitle) {
        let ogTitle = _head.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', data.ogTitle);
        else _head.insertAdjacentHTML('beforeend', `<meta property="og:title" content="${data.ogTitle}">`);
    }

    if (data.ogDescription) {
        let ogDescription = _head.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', data.ogDescription);
        else _head.insertAdjacentHTML('beforeend', `<meta property="og:description" content="${data.ogDescription}">`);
    }

    if (data.ogImage) {
        let ogImage = _head.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', data.ogImage);
        else _head.insertAdjacentHTML('beforeend', `<meta property="og:image" content="${data.ogImage}">`);
    }

    if (data.ogUrl) {
        let ogUrl = _head.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', data.ogUrl);
        else _head.insertAdjacentHTML('beforeend', `<meta property="og:url" content="${data.ogUrl}">`);
    }

    if (data.canonicalUrl) {
        let canonicalUrl = _head.querySelector('link[rel="canonical"]');
        if (canonicalUrl) canonicalUrl.setAttribute('href', data.canonicalUrl);
        else _head.insertAdjacentHTML('beforeend', `<link rel="canonical" href="${data.canonicalUrl}">`);
    }
}