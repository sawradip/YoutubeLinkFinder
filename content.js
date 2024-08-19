// Get the iframe source attribute for YouTube embed link
window.addEventListener('load', () => {

    const iframe = document.evaluate('/html/body/div[2]/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/iframe', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    if (iframe) {
        const src = iframe.src;
        const videoIdMatch = src.match(/embed\/([a-zA-Z0-9_-]+)/);
        if (videoIdMatch) {
            const videoId = videoIdMatch[1];
            const watchLink = `https://www.youtube.com/watch?v=${videoId}`;
            console.log('YouTube video watch link found:');
            console.log(watchLink);
            // Automatically open a small popup with the found YouTube link
            chrome.runtime.sendMessage({ youtubeLinks: [src] });
        } else {
            console.log('No YouTube embed link found in the iframe.');
        }
    } else {
        console.log('Iframe not found.');
    }
});