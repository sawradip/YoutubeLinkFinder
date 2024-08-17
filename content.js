// Patterns to match YouTube URLs
const patterns = [
    /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    /https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/
  ];
  
  // Find all YouTube links on the page
  function findYouTubeLinks() {
    const links = document.querySelectorAll('a');
    const foundLinks = [];
  
    links.forEach(link => {
      const url = link.href;
      patterns.forEach(pattern => {
        const match = url.match(pattern);
        if (match) {
          foundLinks.push(url);
        }
      });
    });
  
    return foundLinks;
  }
  
  // Send found links to the background script
  const foundLinks = findYouTubeLinks();
  if (foundLinks.length > 0) {
    chrome.runtime.sendMessage({ youtubeLinks: foundLinks });
  }