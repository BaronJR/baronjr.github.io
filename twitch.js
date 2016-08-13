// Streams API https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md
// Embed video https://github.com/justintv/Twitch-API/blob/master/embed-video.md

function embedStream(channel) {
    var options = {
        width: 854,
        height: 480,
        channel: channel, 
        autoplay: false,
        //video: "{VIDEO_ID}"       
    };

    var player = new Twitch.Player("twitchPlayer", options);
    player.setVolume(0.5);
};

embedStream("eleaguetv");