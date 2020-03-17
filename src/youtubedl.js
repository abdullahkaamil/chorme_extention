// console.log('our extension has loaded');

window.onload = function () {
    var videourl = window.ytplayer.config.args.loaderUrl;
    // console.log(videourl);

}
var data = { 'tpye': 'download Click' };
window.postMessage(data, "*");


var container = document.getElementById("flex");
var btn = document.createElement("button");
btn.className = "yt-simple-endpoint style-scope ytd-button-renderer";
btn.setAttribute('role', 'button');
btn.setAttribute('id', 'download-button');
// btn.setAttribute('style', 'margin-top:50px;');
btn.innerHTML = "Download";
container.appendChild(btn);

var down = document.getElementById("download-button");

// down.onclick = function () {
//     downloadVideo();
// }


// function downloadVideo() {
//     console.log("download this video");
// }