//
var youTubeSelect = $("#youTubeBtnFucntion");
var youtTubeKey = "AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U";
//

//

//on ppage load gives back the most popular videos
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/videos",
        data: {
            key: youtTubeKey,
            part: "snippet",
            chart: "mostPopular",
            videoCategoryId: "0",
            maxResults: 4
        },
        success: embedVideoOnLoad
    });
});
//

//
var youTube = $("#youtube");
//

// Call the YouTube API
function searchYouTubeByKeyword(searchTerm) {
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        data: {
            key: youtTubeKey,
            q: searchTerm,
            part: "snippet",
            maxResults: 4,
            type: "video",
            videoEmbeddable: true
        },
        success: embedVideoOnSearch,
        error: function (response) {
            alert(response + "Check internet connection");
            console.log("Request Failed");
        }
    });
}
//

// Display video on load
function embedVideoOnLoad(data) {
    console.log(data);
    data.items.forEach(item => {
        var addVideo = $("<iframe>").addClass("col-6");
        addVideo.addClass("video-stream");
        addVideo.attr("src", "https://www.youtube.com/embed/" + item.id);
        youTube.append(addVideo);
    });
}
//

// Display video on search
function embedVideoOnSearch(data) {
    console.log(data);
    youTube.empty();
    var h1 = $("<h1>" + "Search Result" + "</h1>")
    youTube.append(h1);
    data.items.forEach(item => {
        var addVideo = $("<iframe>").addClass("col-6");
        addVideo.addClass("video-stream");
        addVideo.attr("src", "https://www.youtube.com/embed/" + item.id.videoId);
        youTube.append(addVideo);
    });
}
//

//Szilard is working on this last updated 02.11.2019
