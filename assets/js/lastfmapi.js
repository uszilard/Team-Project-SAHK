//
$("#search-btn").on("click", function (event) {
    event.preventDefault();

    var userSearchInput = $("#user-search").val();

    console.log(userSearchInput);

    searchByKeyword(userSearchInput);
});

function displayMusicInfo() { }

displayMusicInfo();
//

//

// this section does not work I get an error 401 - Spotify block code goes here below:
//function searchByKeyword(searchTerm) {
//var spotifyKey = "6rqhFgbbKwnb9MLmUQDhG6";
//var queryURL = "https://api.spotify.com/v1/search?query=" + searchTerm;

//$.ajax({
//url: queryURL,
//method: "GET"
//}).then(function(response) {
//$("#youtube").text(JSON.stringify(response));
//console.log(response);
//});
//}//