$("#search-btn").on("click", function (event) {

    event.preventDefault()

    var userSearchInput = $("#user-search").val()

    console.log(userSearchInput)


    searchByKeyword(userSearchInput)

})



// Function for dumping the JSON content for each button into the div
function displayMusicInfo() {

    // YOUR CODE GOES HERE!!! HINT: You will need to create a new div to hold the JSON.
    //var musicVideo = $(this).attr("data-name");

    // https://www.googleapis.com/youtube/v3/search?q=berlin&part=snippet&key=AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U


};

displayMusicInfo()





function searchByKeyword(searchTerm) {
    var key = "AIzaSyB08uG89n8Ul5LA3j0fu1ubMFmh4SrV44U"
    var queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&part=snippet&key=" + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#youtube").text(JSON.stringify(response));
        console.log(response);
        console.log(queryURL);

        //var posterImg = $("<img>")
        //posterImg.attr("src", response.Poster)
        //$("#display-movie-poster").html(posterImg);
        //console.log(posterImg);
    });


};

