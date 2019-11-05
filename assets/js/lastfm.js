var lastFmKey = "110c00d4400e2e57a4f2b2bb856c9c7b";
var lastFm = $("#lastFm");

//
function fetchData(queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#lastFm").empty();
    var result;
    if (response.albums) {
      result = response.albums.album;
    } else {
      result = response.results.albummatches.album;
    }

    result.forEach(element => {
      var albumBox = $("<div>").addClass("col albumBox");
      var albumTitle = $("<a>")
        .addClass("card-link")
        .attr("href", element.url)
        .attr("target", "_blank")
        .attr("title", "To the artist's page on Last.fm");
      var albumImage = $("<img>");

      if (element.artist.name) {
        albumTitle.html("<br>" + element.artist.name + " - " + element.name);
      } else {
        albumTitle.text(element.name);
      }

      albumImage.attr("src", element.image[2]["#text"]);

      albumBox.append(albumImage);
      albumBox.append(albumTitle);
      lastFm.append(albumBox);
    });
  });
}

var resultsNum = 6;

$(document).ready(function () {
  var queryURL =
    "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=usa&api_key=" +
    lastFmKey +
    `&format=json&limit=${resultsNum}`;
  console.log("queryURL", queryURL);
  fetchData(queryURL);
});

function searchLastFmByKeyword(searchTerm) {
  var queryURL =
    "https://ws.audioscrobbler.com/2.0/?method=album.search&album=" +
    searchTerm +
    "&api_key=" +
    lastFmKey +
    `&format=json&limit=${resultsNum}`;
  console.log("queryURL", queryURL);

  fetchData(queryURL);
  $("#albumsTitle").html(
    "Top Albums for '" +
    searchTerm +
    "'" +
    "<i class='fas fa-record-vinyl'></i>"
  );
}
