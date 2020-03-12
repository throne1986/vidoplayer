$(document).ready(function () {

    $(window).resize(resizeWindow);
    $(window).resize();
})

function resizeWindow() {
    $("#video-container").css("width", "auto");
    $("#video-container").css("height", "auto");

    $("#video-block").css("width", "auto");
    $("#video-block").css("height", "auto");

    $("#video-container").height(($("#video-container").width() * 576) / 1024);
    
    $("#video-block").height(($("#video-block").width() * 576) / 1024);
}
