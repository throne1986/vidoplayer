
let container;
let  iframe ;
var adtype = "[adtype]";
var codeid = "[codeid]";
var videofornat = "[videoformat]";
var domainurl = "[domainurl]";
var tagurl = "[tagurl]";
var codeid = "[codeid]";
   
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


