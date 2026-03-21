function ouiify() {

    document.querySelectorAll("p").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h1").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h2").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h3").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h4").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h5").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("h6").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("button").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("input").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("span").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("em").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("b").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("strong").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("mark").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("small").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("label").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("sub").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("sup").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("ins").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("del").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("i").forEach(image => { image.textContent = "Ouiouioui" });
    document.querySelectorAll("li").forEach(image => { image.textContent = "Ouiouioui" });
    

    document.querySelectorAll("img").forEach(image => { image.src = "https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp" });
    document.querySelectorAll("a img").forEach(image => { image.src = "https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp" });
    document.querySelectorAll("div img").forEach(image => { image.src = "https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp" });
    document.querySelectorAll("span img").forEach(image => { image.src = "https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp" });
    document.querySelectorAll("video").forEach(image => { image.src = "https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp" });

    //document.querySelectorAll("div").forEach(image => {image.style.backgroundImage = "url('https://location-victor.ch/templates/yootheme/cache//1d/pngegg-1d2855ae.webp')"});

}

let ouiInterval = null;

function startOuiify() {
    if (ouiInterval) return;
    ouiify();
    ouiInterval = setInterval(ouiify, 2000);
}

function stopOuiify() {
    clearInterval(ouiInterval);
    ouiInterval = null;
}

// Start based on stored state
chrome.storage.local.get({ ouiEnabled: true }, (data) => {
    if (data.ouiEnabled) startOuiify();
});

// Listen for toggle messages from the popup
chrome.runtime.onMessage.addListener((message) => {
    if (message.ouiEnabled) {
        startOuiify();
    } else {
        stopOuiify();
    }
});
