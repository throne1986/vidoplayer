var actualScene = 0;
var userMuted = "false";
var configFromParent = null;
var adStarted = false;

$(document).ready(function() {
    
    $("#videoplayer")[0].addEventListener("ended", videoComplete);
    //get videoplayer tag element
    var videoplayerID = document.getElementById("videoplayer");
    //get current time using timeudate from video tag
    videoplayerID.addEventListener("timeupdate", function() {

        if (this.currentTime > 0) {
            $("#bigplay_btn").hide();
        } else {
            $("#bigplay_btn").show();
        }

        if ($(this)[0].duration) {
            $(this).parent().parent().find("#current-time").css("width", ($(this)[0].currentTime * 100 / $(this)[0].duration) + "%");
        }
 
    
    });

    
    $("#bigplay_btn").on('click', function () {
        console.log('clicked bg player');
        $("#videoplayer")[0].play();
        $("#play").css("display", "none");
        $("#pause").css("display", 'block');
        $(this).hide();
        $("#video-controls").addClass('show');

    })


    $("#muted-btn").on("click", function() {
        if ($("#videoplayer")[0].muted == false) {
            $("#videoplayer")[0].muted = true;
            $("#muted-btn").removeClass("muted");
            console.log('remove class muted');
            if(adStarted==true) {
                console.log(adStarted);
                adsManager.setVolume(0);
            
            }
           
        } else {
            $("#muted-btn").addClass("muted");
            console.log('add class muted');
            $("#videoplayer")[0].muted = false;
            if(adStarted==true) {
                adsManager.setVolume(1);
            }
        }

        if ($("#videoplayer")[0].muted == true) {
            userMuted = true;
        } else {
            userMuted = false;
        }
    });

    $("#videoplayer").on('ended', function() {
        $("#bigplay_btn").show();
    })
    function videoComplete(e) {
        console.log("video ended");
        parent.postMessage( { 
            videoComplete:true    
        } , "*");
        $("#videoplayer")[0].currentTime = 0;
        
    }
})