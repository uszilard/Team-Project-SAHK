//
var youTubeSelect = $("#youTubeBtnFucntion")
var spotifySelect = $("#spotifyBtnFunction")
var radioSelect = $("#radioBtnFunction")
var youtTubeKey = "AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U"
//

// Search Function
$(".youtubeBtn").on("click", function (event) {
    event.preventDefault();

    var userSearchInput = $("#user-search").val();

    console.log(userSearchInput);

    searchByKeyword(userSearchInput);
});

function displayMusicInfo() { }

displayMusicInfo();
//

//on ppage load gives back the most popular videos
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "https://www.googleapis.com/youtube/v3/videos",
        data: {
            key: youtTubeKey,
            part: "snippet",
            chart: "mostPopular",
            regionCode: "DE",
            videoCategoryId: "0",
            maxResults: 4
        },
        success:
            embedVideoOnLoad
    });
});
//

var youTube = $("#youtube");

// Call the YouTube API
function searchByKeyword(searchTerm) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: youtTubeKey,
            q: searchTerm,
            part: 'snippet',
            maxResults: 4,
            type: 'video',
            videoEmbeddable: true
        },
        success:
            embedVideoOnSearch
        ,
        error: function (response) {
            alert(response + "Check internet connection")
            console.log("Request Failed");
        }
    });
}
//

// Display video on load
function embedVideoOnLoad(data) {
    console.log(data)
    data.items.forEach(item => {
        var addVideo = $("<iframe>");
        addVideo.addClass("video-stream");
        addVideo.attr('src', 'https://www.youtube.com/embed/' + item.id);
        youTube.append(addVideo);
    });
}
//

// Display video on search
function embedVideoOnSearch(data) {
    console.log(data)
    data.items.forEach(item => {
        var addVideo = $("<iframe>");
        addVideo.addClass("video-stream");
        addVideo.attr('src', 'https://www.youtube.com/embed/' + item.id.videoId);
        youTube.append(addVideo);
    });
}
//