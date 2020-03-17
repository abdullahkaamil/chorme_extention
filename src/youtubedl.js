console.log('our extension has loaded');

window.onload = function () {
    var videourl = window.ytplayer.config.args.loaderUrl;
    console.log(videourl);


}