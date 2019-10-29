//
var youTubeSelect = $("#youTubeBtnFucntion")
var spotifySelect = $("#spotifyBtnFunction")
var radioSelect = $("#radioBtnFunction")
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


var youTube = $("#youtube");


// Call the YouTube API
function searchByKeyword(searchTerm) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U',
            q: searchTerm,
            part: 'snippet',
            maxResults: 4,
            type: 'video',
            videoEmbeddable: true,
        },
        success: function (data) {
            embedVideo(data)
            console.log(data)
        },
        error: function (response) {
            alert(response + "Check internet connection")
            console.log("Request Failed");
        }
    });
}
//


// Display video in page
function embedVideo(data) {


    data.items.forEach(item => {
        var addVideo = $("<iframe>");
        addVideo.addClass("video-stream");
        addVideo.attr('src', 'https://www.youtube.com/embed/' + item.id.videoId);
        $("#youtube").append(addVideo);
    });
}
//