/**
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var autoplayAllowed = false;
var autoplayRequiresMute = false;
var player;
var wrapperDiv;

var vasturl = "";


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  var found = "";
  for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) found = pair[1]
  }

  if (found == "") {
          found = vars[0];
  }

  return found;
}

function loadConfig() {

  var configjs = document.createElement("script");
  configjs.setAttribute("src", "http://localhost/player/resources/views/pages/settings/codes/" + "/config_" + getQueryVariable("codeid") + ".js" );
  document.head.appendChild(configjs);

  
}
function checkUnmutedAutoplaySupport() {
    console.log('Checked Demo');
    canAutoplay
        .video({
            timeout: 100,
            muted: false
        })
        .then(({
            result,
            error
        }) => {
            if (result === false) {
                // Unmuted autoplay is not allowed.
                checkMutedAutoplaySupport();
            } else {
                // Unmuted autoplay is allowed.
                autoplayAllowed = true;
                autoplayRequiresMute = false;
                initPlayer();
            }
        })
}
function checkMutedAutoplaySupport() {
    canAutoplay
        .video({
            timeout: 100,
            muted: true
        })
        .then(({
            result,
            error
        }) => {
            if (result === false) {
                // Muted autoplay is not allowed.
                autoplayAllowed = false;
                autoplayRequiresMute = false;
            } else {
                // Muted autoplay is allowed.
                autoplayAllowed = true;
                autoplayRequiresMute = true;
            }
            initPlayer();
        })
}
function initPlayer() {
    var vjsOptions = {
        autoplay: autoplayAllowed,
        muted: autoplayRequiresMute,
        debug: true,
        
    }
    player = videojs('videoplayer', vjsOptions);
    player.fluid(true);
    player.responsive(true);
    var imaOptions = {
        id: 'videoplayer',
        adTagUrl: vasturl
    };
    player.ima(imaOptions);
    if (!autoplayAllowed) {
        if (navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/Android/i)) {
            startEvent = 'touchend';
        }
        wrapperDiv = document.getElementById('videoplayer');
        wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
    }
}
function initAdDisplayContainer() {
    player.ima.initializeAdDisplayContainer();
    wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}
// var startEvent = 'click';
// checkUnmutedAutoplaySupport();