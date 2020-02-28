$(document).ready(function () {


    $("#pause-play-button").on("click", function () {
  
        if ($("#video-block video")[0].paused == false) {
            console.log('False video is not paused')
            $("#video-block video")[0].play();
            $("#pause").css("display", 'none');
            $("#bigplay_btn").css("display", 'none');
            $("#play").css("display", "block");
        } else {
            console.log('True video is paused')
            $("#video-block video")[0].pause();
            $("#pause").css("display", 'block');
            $("#play").css("display", "none");
        }
    });

    $("#pause-play-button").on("click", function () {
        TweenMax.set('.opened', {clearProps: 'all'});
        if($("#video-block video")[0].paused==true) {
            $("#video-block video")[0].play();
        } else {
            $("#video-block video")[0].pause();
        }
    });


    $("#seek-bar").each(function () {
        $(this).on("mousedown", function (e) {
            $("#videoplayer").removeClass("ended");
            var posX = $(this).offset().left,
                posY = $(this).offset().top;
            $(this).parent().parent().parent().find("video")[0].currentTime = $(this).parent().parent().parent().find("video")[0].duration * ((e.pageX - posX) / $(this).width());
        });
    });

    $(window).resize(resizeWindow);
    $(window).resize();
})

function resizeWindow() {
    $("#video-container").css("width", "auto");
    $("#video-container").css("height", "auto");

    $("#video-block").css("width", "auto");
    $("#video-block").css("height", "auto");

    $("#video-container").height(($("#video-container").width() * 576) / 1024);

    if ($("#interactive-layers").height(($("#interactive-layers").width() * 576) / 1024)) {
        $("#interactive-layers").css(
            "transform",
            "scale(" + $("#videoplayer").width() / 1024 + ")"
        );
    }
    if ($("#adcontainer").height(($("#adcontainer").width() * 576) / 1024)) {
        $("#adcontainer").css(
            "transform",
            "scale(" + $("#videoplayer").width() / 1024 + ")"
        );
    }

    if ($("#interactive-modal").height(($("#interactive-modal").width() * 576) / 1024)) {
        $("#interactive-modal").css(
            "transform",
            "scale(" + $("#videoplayer").width() / 1024 + ")"
        );
    }
    $("#video-block").height(($("#video-block").width() * 576) / 1024 + 45);

}

function onPlay() {
    $("#videoplayer").removeClass("ended");
    $("#video-block").addClass("playing");
    $("#video-block").removeClass("paused");
    $("#play").css("display", "none");
    $("#pause").css("display", 'block');
   
}

function onPause() {
    $("#videoplayer").removeClass("ended");
    $("#video-block").addClass("paused");
    $("#video-block").removeClass("playing");
}

function onEnded() {
    $("#videoplayer").addClass("ended");
    $("#pause").css("display", 'none');
    $("#play").css("display", "block");
}

function onUpdateTime() {
    if ($(this)[0].duration) {
        $(this).parent().parent().find("#current-time").css("width", ($(this)[0].currentTime * 100 / $(this)[0].duration) + "%");
    }
}

function videoReady() {
    $("#videoplayer").css("opacity", "1");
    $("#video-block").addClass("canplay");
    $("#video-block").parent().addClass("paused");
}


