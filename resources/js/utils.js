export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(amount);
};
export const appendHead = (data) => {
    let _head = document.querySelector('head');
    _head.innerHTML += `
        <meta name="description" content="${data.description}">
        <meta name="keywords" content="${data.keywords}">
        <meta property="og:title" content="${data.ogTitle}">
        <meta property="og:description" content="${data.ogDescription}">
        <meta property="og:image" content="${data.ogImage}">
        <meta property="og:url" content="${data.ogUrl}">
        <link rel="canonical" href="${data.canonicalUrl}">
    `;

}