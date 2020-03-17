s = document.createElement('script');
s.src = chrome.extension.getURL('src/youtubedl.js');

s.onload = function () {
    this.remove();
}

document.head.appendChild(s);


window.addEventListener('message', function (e) {
    console.log(e.data.type);
})