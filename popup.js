document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('youtubeLinks', (data) => {
      const linksDiv = document.getElementById('links');
      const links = data.youtubeLinks || [];
      if (links.length > 0) {
        links.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.href = link;
          linkElement.textContent = link;
          linkElement.target = '_blank';
          linksDiv.appendChild(linkElement);
        });
      } else {
        linksDiv.textContent = 'No YouTube links found on this page.';
      }
    });
  });