(function() {
  // Preload for faster discovery (optional but recommended)
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.href = 'favicon.webp';
  preloadLink.as = 'image';
  document.head.appendChild(preloadLink);

  // Favicon link
  const faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  faviconLink.type = 'image/webp'; // More accurate for WebP
  faviconLink.href = 'favicon.webp';
  
  // Size specifications (recommended to prevent layout shifts)
  faviconLink.sizes = '32x32'; // Standard size
  
  // Append to head
  document.head.appendChild(faviconLink);
})();