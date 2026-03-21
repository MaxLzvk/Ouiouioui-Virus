const btn = document.getElementById("toggle");

function updateButton(enabled) {
    btn.textContent = enabled ? "Enabled: click to disable" : "Disabled: click to enable";
    btn.className = enabled ? "on" : "off";
}

// Load current state
chrome.storage.local.get({ ouiEnabled: true }, (data) => {
    updateButton(data.ouiEnabled);
});

// Toggle on click
btn.addEventListener("click", () => {
    chrome.storage.local.get({ ouiEnabled: true }, (data) => {
        const newState = !data.ouiEnabled;
        chrome.storage.local.set({ ouiEnabled: newState }, () => {
            updateButton(newState);
            // Notify or reload the active tab
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs[0]) {
                    if (newState) {
                        chrome.tabs.sendMessage(tabs[0].id, { ouiEnabled: true });
                    } else {
                        chrome.tabs.reload(tabs[0].id);
                    }
                }
            });
        });
    });
});
