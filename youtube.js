// Google terms and API info
// My Project ID: baronjr-0212
// API Key Name: BaronJR1 Key: AIzaSyAitblbfT49lkSpSP3aq7CjqHduRJcwIYY
// https://console.cloud.google.com/apis/api/youtube/overview?project=baronjr-0212
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var youtubeId = response.items[0].snippet.resourceId.videoId;
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;

    // var newVideo = '<iframe id="ytplayer" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/M7lc1UVf-VE?showinfo=0" frameborder="0"></iframe>;'

  //   var newVideo = "<iframe id='ytplayer' type='text/html' width='640' height='390'
  // src='https://www.youtube.com/embed/" + youtubeId + "?showinfo=0'
  // frameborder='0'></iframe>";
    // document.getElementById('videoPlayer').innerHTML += newVideo;


}

function createVideo(response) {
    var videoID = response.items[0].snippet.resourceId.videoId;
    var thumbnailID = response.items[0].snippet.thumbnails.medium.url;

    var videoElement = 
    '<div>' + 
        '<a href="' + videoID + '" class="lightbox video"><img src="' + thumbnailID + '"></a>' + 
    '</div>';

    document.getElementById('videoPlayer').innerHTML += videoElement;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAitblbfT49lkSpSP3aq7CjqHduRJcwIYY');
    
    // Add code here to test out showResponse():
    playlistItems();
}

function playlistItems() {
    // Use the JavaScript client library to create a playlistItems.list() API call.
    var request = gapi.client.youtube.playlistItems.list({
        part: 'snippet',
        playlistId: 'PL19501DCDB5767545'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
    createVideo(response);
}

// Youtube player embed https://developers.google.com/youtube/player_parameters#Manual_IFrame_Embeds