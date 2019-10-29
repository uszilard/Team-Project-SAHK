function searchLastFm(searchTerm) {
    var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchTerm + "&api_key=" + lastFmKey + "&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#lastFm").text(JSON.stringify(response));
        console.log("lastFmResponse", response);
    });
}


searchLastFm("beyonce")