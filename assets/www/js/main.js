

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady () {
    new Media('/android_asset/www/sounds/cambur_pinton.ogg').play();
}