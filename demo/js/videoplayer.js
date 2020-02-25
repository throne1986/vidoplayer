

var autoplay = true;
var wpvideo = "https://wp-iframe.videomill.co/vpaidexamples/videos//vmerce.mp4";

$(document).ready(function () {

    playVideo(wpvideo);

    $("#videoplayer")[0].addEventListener("volumechange", updateButton);

    // $("#pause-play-button").on('click', function(){
    //     $("#videoplayer")[0].muted = !$("#videoplayer")[0].muted;
    //     userClickedMutedButton = true;
    // })

});

var userClickedMutedButton = false;

function playVideo(src) {
    $("#videoplayer").attr("src", src);
    if(userClickedMutedButton==true) {

    } else {
        $("#videoplayer")[0].muted = false;

    }

    if (autoplay == true) {

        var playPromise = $("#videoplayer")[0].play();

        if (playPromise !== undefined) {

            playPromise.then(function() {
                console.log("play with sound")
           
            }).catch(function() {
                    console.log('cant plat with sound');
            
                    $("#videoplayer")[0].muted = true;
                    var playPromise2 = $("#videoplayer")[0].play();

                    playPromise2.then(function() {
                        console.log("play without sound")

                    }).catch(function() {

                        console.log("can't play without sound");

                        $("#bigplay_btn").addClass("show");


                        $("#bigplay_btn").on("click", function() {
                            $("#videoplayer")[0].muted = false;
                            $("#videoplayer")[0].play();
                            $("#bigplay_btn").removeClass("show");

                        });
                    });

                    console.log("pause force");
            });
        } else {

            $("#videoplayer")[0].muted = false;
            $("#videoplayer")[0].play();

        }
    } else {

    }

}

function updateButton(){
    if( $("#videoplayer")[0].muted==true ) {
        $("#muted-btn").addClass("muted");
    } else {
        $("#muted-btn").removeClass("muted");
    }
}
