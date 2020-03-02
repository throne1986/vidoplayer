var actualScene = 0;
var userMuted = "false";
var configFromParent = null;
var adStarted = false;

$(document).ready(function () {
    console.log('Main function')

    $("#vast-skip").on('click', function () {
        $('#adform-outstream').remove();
        console.log('Removed Data');
        console.log(window.parent);
        $(window.top.document).find("adform-outstream").css('display');
    })


    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 400) {
            // $('#adform-outstream').fadeIn();
            $('#adform-outstream').css({ 'height': 'auto' });
        } else {
            // $('#adform-outstream').fadeOut();
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

    $("#muted-btn").on("click", function () {
        if ($("#videoplayer")[0].muted == false) {
            $("#videoplayer")[0].muted = true;
            $("#muted-btn").removeClass("muted");
            console.log('remove class muted');
            if (adStarted == true) {
                console.log(adStarted);
                adsManager.setVolume(0);

            }

        } else {
            $("#muted-btn").addClass("muted");
            console.log('add class muted');
            $("#videoplayer")[0].muted = false;
            if (adStarted == true) {
                adsManager.setVolume(1);
            }
        }

        if ($("#videoplayer")[0].muted == true) {
            userMuted = true;
        } else {
            userMuted = false;
        }
    });

    $("#videoplayer").on('ended', function () {
        $("#bigplay_btn").show();
    })
 
})