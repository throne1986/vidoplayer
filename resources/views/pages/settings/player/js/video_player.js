// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

/**
 * Handles video player functionality.
 */

var VideoPlayer = function() {
  this.contentPlayer = document.getElementById('videoplayer');
  this.adContainer = document.getElementById('adcontainer');
  this.videoPlayerContainer_ = document.getElementById('video-container');
  this.width = 1024;
  this.height = 576;
console.log(adStarted);
  if(adStarted==true) {
      console.log(this.adContainer);
    TweenMax.set($(".wp_btn_banner"), {
        y: 0
    });
    TweenMax.to($(".wp_btn_banner"), 1, {
        y: 100,
        opacity: 1,
        ease: Power1.easeOut
    });
    $(this.adContainer).append($(".wp_btn_banner"));
  }
};


VideoPlayer.prototype.preloadContent = function(contentLoadedAction) {
  // If this is the initial user action on iOS or Android device,
  // simulate playback to enable the video element for later program-triggered
  // playback.
  if (this.isMobilePlatform()) {
    this.preloadListener_ = contentLoadedAction;
    this.contentPlayer.addEventListener(
        'loadedmetadata',
        contentLoadedAction,
        false);
    this.contentPlayer.load();
  } else {
    contentLoadedAction();
  }
};

VideoPlayer.prototype.removePreloadListener = function() {
  if (this.preloadListener_) {
    this.contentPlayer.removeEventListener(
        'loadedmetadata',
        this.preloadListener_,
        false);
    this.preloadListener_ = null;
  }
};

VideoPlayer.prototype.play = function() {
  this.contentPlayer.play();
};

VideoPlayer.prototype.pause = function() {
  this.contentPlayer.pause();
};

VideoPlayer.prototype.isMobilePlatform = function() {
  return this.contentPlayer.paused &&
      (navigator.userAgent.match(/(iPod|iPhone|iPad)/) ||
       navigator.userAgent.toLowerCase().indexOf('android') > -1);
};

VideoPlayer.prototype.resize = function(
    position, top, left, width, height) {
  this.videoPlayerContainer_.style.position = position;
  this.videoPlayerContainer_.style.top = top + 'px';
  this.videoPlayerContainer_.style.left = left + 'px';
  this.videoPlayerContainer_.style.width = width + 'px';
  this.videoPlayerContainer_.style.height = height + 'px';
  this.contentPlayer.style.width = width + 'px';
  this.contentPlayer.style.height = height + 'px';
};

VideoPlayer.prototype.registerVideoEndedCallback = function(callback) {
  this.contentPlayer.addEventListener('ended', callback, false);
};

VideoPlayer.prototype.removeVideoEndedCallback = function(callback) {
  this.contentPlayer.removeEventListener('ended', callback, false);
};
