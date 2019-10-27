

$("#search-btn").on("click", function (event) {

    event.preventDefault()

    var userSearchInput = $("#user-search").val()

    console.log(userSearchInput)


    searchByKeyword(userSearchInput)

})

function displayMusicInfo() {

};

displayMusicInfo()



//  console.log(thumbnails_default);
//A HTTP call to this URL with videoID will give all XML info of that video: 
//http://gdata.youtube.com/feeds/api/videos?q=videoID
//  console.log(videoID);
var youTube = $("#youtube")


function searchByKeyword(searchTerm) {
    var youTubeKey = "AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U"
    var queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&part=snippet&key=" + youTubeKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#youtube").text(JSON.stringify(response));
        console.log(response);

        for (var i = 0; i < response.items.length; i++) {
            //store each JSON value in a variable
            var publishedAt = response.items[i].snippet.publishedAt;
            var channelId = response.items[i].snippet.channelId;
            var title = response.items[i].snippet.title;
            var description = response.items[i].snippet.description;
            var thumbnails_default = response.items[i].snippet.thumbnails.default.url;
            var thumbnails_medium = response.items[i].snippet.thumbnails.medium.url;
            var thumbnails_high = response.items[i].snippet.thumbnails.high.url;
            var channelTitle = response.items[i].snippet.channelTitle;
            var liveBroadcastContent = response.items[i].snippet.liveBroadcastContent;
            var videoID = response.items[i].id.videoId;
        }


        // for (var i = 0; i < youTube; i++) {
        //   console.log[i]
        // }


        //var youTube = $("#youtube").text(youTube[i], title); // this is not working

        // Create a thumbnail for a video snippet.
        function createDisplayThumbnail(videoSnippet) {
            var titleEl = $('<h3>');
            titleEl.addClass('video-title');
            $(titleEl).html(videoSnippet.title);
            var thumbnailUrl = videoSnippet.thumbnails.medium.url;

            var div = $('<div>');
            div.addClass('video-content');
            div.css('backgroundImage', 'url("' + thumbnailUrl + '")');
            div.append(titleEl);
            $('#youtube').append(div);
        }
    });




};

// this section does not work I get an error 401 
function searchByKeyword(searchTerm) {
    var spotifyKey = "6rqhFgbbKwnb9MLmUQDhG6"
    var queryURL = "https://api.spotify.com/v1/search?query=" + searchTerm;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#youtube").text(JSON.stringify(response));
        console.log(response);

    });

};

