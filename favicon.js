(function() {
  // Favicon link only (no preload)
  const faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  faviconLink.type = 'image/webp';
  faviconLink.href = 'favicon.webp';
  faviconLink.sizes = '32x32';
  document.head.appendChild(faviconLink);
})();