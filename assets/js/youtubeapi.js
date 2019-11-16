const API_KEY = "AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U";
const YOUTUBE_TRENDING_ENDPOINT = 'https://www.googleapis.com/youtube/v3/videos';
const YOUTUBE_SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

function fetchYoutube(url, data = {}) {
    Object.assign(data, {
        key: API_KEY,
        part: "snippet",
        maxResults: 8
    });
    return $.ajax({
        type: "GET",
        url,
        data,
    }).then(res => renderVideos(res));
}

function loadInitialVideos() {
    return fetchYoutube(YOUTUBE_TRENDING_ENDPOINT, {
        chart: "mostPopular",
        videoCategoryId: "0",
    });
}

function searchYouTubeByKeyword(searchTerm) {
    return fetchYoutube(YOUTUBE_SEARCH_ENDPOINT, {
        q: searchTerm,
        type: "video",
        videoEmbeddable: true
    })
    .then(res => {
        $("#search-result").html(
            "<h1>" + "Search Results " + "<i class='fas fa-film'></i></h1>"
        );
    })
    .catch(err => {
        console.logo('Check internet connection:');
        console.error(err);
    });
}
//

function renderVideos(data) {
    console.log(data);
    const youTube = $("#youtube");
    youTube.empty();
    data.items.forEach(video => {
        var videoId;
        if (video.kind === "youtube#searchResult") {
            videoId = video.id.videoId;
        } else {
            videoId = video.id;
        }
        var addVideo = $("<iframe>")
            .addClass("col-xl-6")
            .attr({ allowfullscreen: "allowfullscreen", frameborder: "0" });
        addVideo.addClass("video-stream");
        addVideo.attr("src", "https://www.youtube.com/embed/" + videoId);
        youTube.append(addVideo);
    });
}