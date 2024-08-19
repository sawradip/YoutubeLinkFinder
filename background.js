chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.youtubeLinks) {
        chrome.storage.local.set({ youtubeLinks: message.youtubeLinks }, () => {
            // Automatically open the popup when the page is loaded
            chrome.action.setPopup({ popup: 'popup.html' });
            chrome.action.openPopup(); // Open the popup
        });
    }
});

