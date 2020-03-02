
let container;
let  iframe ;
var adtype = "InView video Ads";
var codeid = "v02GzYSza";
var videofornat = "OUTSTREAM VIDEO PLAYER";
var domainurl = "https://test.adform.com/banners/video/outstream/preview.html";
var tagurl = "[tagurl]";
var codeid = "v02GzYSza";
   
    // append elements to body
    container = document.getElementById('adform-outstream');
    // var closeContainer =document.getElementById('skip');
    iframe = document.createElement('iframe');
    iframe.id = "main-iframe";
    iframe.frameBorder=0;
    iframe.width="100%";
    iframe.maxWidth="1024px";
    iframe.src = 'http://localhost/player/resources/views/pages/settings/player/index.html?codeid=' + codeid;

    container.appendChild(iframe);


    $(document).ready(function(){
        function resizeIframe() {
            $("iframe#main-iframe").height($("iframe#main-iframe").width() * 576 / 1024 + 45);
        }
        $(window).resize(resizeIframe);
        $(window).resize();
    })


