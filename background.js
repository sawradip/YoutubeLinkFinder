chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.youtubeLinks) {
      chrome.action.setPopup({ popup: 'popup.html' });
      chrome.storage.local.set({ youtubeLinks: message.youtubeLinks });
    }
  });



chrome.browserAction.onClicked.addListener((tab) => {
    // Check for detected links
    if (detectedLinks.length > 0) {
        chrome.browserAction.setPopup({ popup: "popup.html" }); // Set the popup
        chrome.browserAction.getPopup((popup) => {
            if (!popup) {
                chrome.browserAction.openPopup(); // Open the popup
            }
        });
    }
});