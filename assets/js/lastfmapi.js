function searchLastFm(searchTerm) {
    var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + searchTerm + "&api_key=" + lastFmKey + "&format=json&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        response.results.artistmatches.artist.forEach((element, i) => {
            var lastFm = $("#lastFm")
            var artistBox = $("<div>")

            var artistTitle = $("<p>")

            artistTitle.text(element.name)

            var artistImage = $("<img>")

            artistImage.attr("src", element.image[1]["#text"])

            artistBox.append(artistTitle)
            artistBox.append(artistImage)

            lastFm.append(artistBox)

            var htmlBreak = $("<br>")
            lastFm.append(htmlBreak)
            lastFm.append(htmlBreak)




        });
        console.log("lastFmResponse", response);
    });
}


searchLastFm("beyonce")