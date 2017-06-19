$(document).ready(function(){
  console.log('Document ready!')

  /// Selects Different HTML Elements
  const $input = $('input#query')
  const $videoList = $('ul#results')
  const $form = $('form#video-search')

  function fetchAndRenderVideos(e){
    e.preventDefault()
    console.log("Form submitted!!")
    const videoAdapter = new YoutubeVideoInfo($input.val())
    // const newSpotifyAdapter = new Spotify()
    videoAdapter.get()
    .then(renderVideos)
  }

  function renderVideos (data, status, request){
    // takes in some data and renders out a list of results
    console.log('response received!')
    console.log(data)
    const videoListItems = data.items.map(function(video){

      //return title and thumbnail, both linking to video on youtube:
      // return `<h5><li><div style="display: flex; align-items: center"><a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank"><img style="float:left; margin-right:20px" src=${video.snippet.thumbnails.default.url} />${video.snippet.title}</a></div></li></h5> <br>`
      // note: target="_blank" makes video open in new tab

      //return title and thumnail, plus embedded video:
      return `<h5><li><div style="display: flex; align-items: center"><a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank"><img style="float:left; margin-right:20px" src=${video.snippet.thumbnails.default.url} />${video.snippet.title}</a></div></li></h5>
      <br>

      <iframe title="${video.snippet.title}" class="youtube-player" type="text/html"
      width="425" height="349" src="https://www.youtube.com/embed/${video.id.videoId}"
      frameborder="0" allowFullScreen></iframe>
      <br><br>`

    })

    $videoList.html(videoListItems.join(''))
    return data.items[0]
  }

  // on submit, fires a function
  $form.on('submit', fetchAndRenderVideos)

}) //end of document.ready
