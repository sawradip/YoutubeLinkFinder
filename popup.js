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
                linkElement.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent default link behavior
                    navigator.clipboard.writeText(link) // Copy the link to clipboard
                        .then(() => {
                            console.log('Link copied to clipboard:', link);
                        })
                        .catch(err => {
                            console.error('Failed to copy link:', err);
                        });
                });
                linksDiv.appendChild(linkElement);
            });
        } else {
            linksDiv.textContent = 'No YouTube links found on this page.';
        }
    });
});