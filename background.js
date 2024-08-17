chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.youtubeLinks) {
      chrome.action.setPopup({ popup: 'popup.html' });
      chrome.storage.local.set({ youtubeLinks: message.youtubeLinks });
    }
  });