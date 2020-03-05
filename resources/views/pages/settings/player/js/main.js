var actualScene = 0;
var userMuted = "false";
var configFromParent = null;
var adStarted = false;

$(document).ready(function () {
    console.log('Main function')

   $("#vast-skip").on('click', function () {
        var out = window.parent.$("#videomill-Sticky ");
        out.remove();
    })
})