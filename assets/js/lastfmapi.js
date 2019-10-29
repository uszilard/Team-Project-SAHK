function searchLastFm(searchTerm) {
    var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + searchTerm + "&api_key=" + lastFmKey + "&format=json&limit=4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        response.results.albummatches.album.forEach((element, i) => {
            var lastFm = $("#lastFm")
            var albumBox = $("<div>")

            var albumTitle = $("<p>")

            albumTitle.text(element.name)

            var albumImage = $("<img>")

            albumImage.attr("src", element.image[1]["#text"])

            albumBox.append(albumTitle)
            albumBox.append(albumImage)

            lastFm.append(albumBox)

            var htmlBreak = $("<br>")
            lastFm.append(htmlBreak)
            lastFm.append(htmlBreak)




        });
        console.log("lastFmResponse", response);
    });
}


searchLastFm(searchTerm)