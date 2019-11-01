var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";
var lastFm = $("#lastFm");

//
function fetchData(queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#lastFm").empty();
    console.log(response);
    var result;
    if (response.topalbums) {
      result = response.topalbums.album;
    } else {
      result = response.results.albummatches.album;
    }

    result.forEach(element => {
      console.log(element);
      var albumBox = $("<div>").addClass("col");
      var albumTitle = $("<p>");
      var albumImage = $("<img>");

      albumTitle.text(element.name);
      albumImage.attr("src", element.image[2]["#text"]);

      albumBox.append(albumImage);
      albumBox.append(albumTitle);
      lastFm.append(albumBox);
    });
    console.log("lastFmResponse", response);
  });
}

$(document).ready(function() {
  var queryURL =
    "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=" +
    lastFmKey +
    "&format=json&limit=4";
  fetchData(queryURL);
});

function searchLastFmByKeyword(searchTerm) {
  var queryURL =
    "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" +
    searchTerm +
    "&api_key=" +
    lastFmKey +
    "&format=json&limit=4";
  fetchData(queryURL);
}
