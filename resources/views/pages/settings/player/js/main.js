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

    $("#vast-skip").on('click', function(){
        $('#adform-outstream').remove();
          console.log('Removed Data');
          console.log(window.parent);
          $(window.top.document).find("adform-outstream").css('display');
    })

    $(window).scroll(scrollHandler);
    var scrollToElement = "#adform-outstream";
    
        function scrollHandler() {
        function elementScrolled(elem) {
            console.log(elem);
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }
        
        if (elementScrolled(scrollToElement)) {
            console.log('added class')
            $(scrollToElement).addClass("show");
            
            // Important: remove scroll handler
            $(window).off('scroll', scrollHandler);
        }
    }
    
    // $(document).scroll(function () {
    //     var y = $(this).scrollTop() + $(this).innerHeight();
    
    //       var objectBottom =   $('#adform-outstream').offset().top + $(this).outerHeight();
    
    //       if (objectBottom <y) {
    //         $('#adform-outstream').fadeIn();
    //         console.log('yes');
    //       }else{
    //           console.log('love');
    //       }
    // })
    // $(window.top.document).find("body").animate({
    //     scrollTop: 0
    //     }, 600);
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
        $('#adform-outstream').fadeOut();
        parent.postMessage( { 
            videoComplete:true    
        } , "*");
        $("#videoplayer")[0].currentTime = 0;
        
    }
})