# YouTube Link Finder Browser Extension

**YouTube Link Finder** is a simple browser extension that identifies YouTube video links on a loaded webpage (including both 'watch' and 'embed' links) and displays them in a popup where you can easily copy the link. You can also add additional patterns to search for custom links.

## Features

- Detects YouTube links on the current webpage.
- Displays the links in a popup with an option to copy them.
- Easy to extend with additional link patterns.

## Installation

### Step 1: Clone or Download the Project

Clone this repository or download it as a ZIP file and extract it.

```bash
git clone https://github.com/your-username/YouTubeLinkFinder.git
```

### Step 2: Organize the Files

Ensure that the project directory structure is as follows:

```
YouTubeLinkFinder/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
└── README.md
```

### Step 3: Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** by clicking the toggle in the top-right corner.
3. Click on the **Load unpacked** button.
4. Select the `YouTubeLinkFinder` directory from your file system.

### Step 4: Test the Extension

- Visit any webpage with YouTube links (e.g., `https://www.youtube.com`).
- Click on the extension icon in the toolbar.
- A popup will appear showing all detected YouTube links. You can click on any link to open it in a new tab or copy it.

## Customizing Link Patterns

If you want to add more patterns to detect different kinds of YouTube links, you can modify the `content.js` file. Add your custom regex patterns to the `patterns` array.

Example:

```javascript
const patterns = [
  /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
  /https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
  /https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
  /your-custom-regex-here/
];
```

## Icons

You can replace the icons in the `icons/` folder with your own, just ensure they are named `icon16.png`, `icon48.png`, and `icon128.png`, corresponding to the required sizes.

## License

This project is licensed under the MIT License.