// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
// <div id="player"></div>
 new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: { //필요 변수들
      autoplay: true,
      loop: true, 
      playList: 'An6LvWQuj_8' //loop가 true일 경우 다시 반복할 재생 필수
    },
    events: {
      onReady: function (event) { //준비가 되면 함수 실행
        event.target.mute() //음소거
      }
    }
  });
}