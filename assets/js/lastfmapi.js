var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";

//
function fetchData(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#lastFm").empty();
        console.log(response)
        var result;
        if (response.topalbums) {
            result = response.topalbums.album;
        } else {
            result = response.results.albummatches.album;
        }

        result.forEach(element => {
            console.log(element)
            var lastFm = $("#lastFm");
            var albumBox = $("<div>");
            var albumTitle = $("<p class='classname'>");
            var albumImage = $("<img>");

            //albumTitle.text(element.name);
            albumImage.attr("src", element.image[2]["#text"]);

            albumBox.append(albumTitle);
            albumBox.append(albumImage);

            lastFm.append(albumBox);
        });
        console.log("lastFmResponse", response);
    });
}

$(document).ready(function () {


    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=" + lastFmKey + "&format=json&limit=6";
    fetchData(queryURL)

});


function searchLastFmByKeyword(searchTerm) {


    var queryURL =
        "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" +
        searchTerm +
        "&api_key=" +
        lastFmKey +
        "&format=json&limit=8";
    fetchData(queryURL)
}


