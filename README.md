# OuiOui Extention Prank

A Chrome extension that replaces all text and images on any webpage with "Ouiouioui" and a funny image.

## Features

- Replaces all `p`, `h1`–`h6`, `span`, `button`, and `input` text with **Ouiouioui**
- Replaces all images with a special oui image
- Runs every 2 seconds to catch dynamically loaded content
- Toggle the effect **on/off** via the extension popup
- Disabling automatically **refreshes the page** to restore the original content

## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked** and select the project folder
5. The extension is now active on all pages!

## Usage

- Click the extension icon in the toolbar to open the popup
- Press the button to **enable** or **disable** the effect
- Disabling will reload the current tab to restore the original page

## Files

| File | Description |
|------|-------------|
| `manifest.json` | Extension configuration |
| `content.js` | Main script injected into pages |
| `popup.html` | Popup UI |
| `popup.js` | Popup toggle logic |

