// Patterns to match YouTube URLs
const patterns = [
    /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    /https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /https?:\/\/(?:www\.)?youtube\.com\/link\?rel=canonical&url=https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/
  ];
  
  // Find all YouTube links on the page
  function findYouTubeLinks() {
    const elements = document.querySelectorAll('*');
    const foundLinks = [];
  
    elements.forEach(element => {
      if (element.tagName === 'A' || element.tagName === 'IMG' || element.tagName === 'LINK') {
        const url = element.href || element.src || element.getAttribute('href');
        patterns.forEach(pattern => {
          const match = url.match(pattern);
          if (match) {
            foundLinks.push(url);
          }
        });
      }
    });
  
    return foundLinks;
  }
  
  // Send found links to the background script
  const foundLinks = findYouTubeLinks();
  if (foundLinks.length > 0) {
    chrome.runtime.sendMessage({ youtubeLinks: foundLinks });
  }