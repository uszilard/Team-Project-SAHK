// News Section block goes here, Hristina will take care of this for now
//when testing other sections, you can mark the below as a "comment" in order to avoid error messages
//Note: it's quite slow at the moment, I need to figure out a better organisation of the code //Hristina

var keyNapster = "OTBhN2VjODUtZTEwOS00MGY0LTk1ODYtZDViNzFmY2RhMzMy";
var secretNapster = "ZmVmOTNmMGUtNGUwNS00NTNhLWEyY2ItNzYzNmNkZTIwZGY1";
var queryURLNapster = "http://api.napster.com/v2.2/artists/top?apikey=" + keyNapster + "&limit=10";
var newsFeed = $("#news-feed")

//get the data from Napster
$.ajax({
    url: queryURLNapster,
    method: "GET"
}).then(function(response) {
  dataNapster(response);
  dataNapster(response);
  dataNapster(response);
  dataNapster(response);
  dataNapster(response);
});

function dataNapster(response) {
  var randomNumber = Math.floor(Math.random() * response.artists.length); //choose random artist from the result
  var randomArtistInfo = response.artists[randomNumber];

  //getting an image of the artist by ID
  var artistID = randomArtistInfo.id;
  var queryURLimage =
    "http://api.napster.com/v2.2/artists/" +
    artistID +
    "/images?apikey=" +
    keyNapster;
  console.log(queryURLimage);

  $.ajax({ url: queryURLimage, method: "GET" }).then(function(response) {
    var link = response.images[0].url; //index: 0 - normal image for desktop, 1 & 2 - smaller images for mobile
    console.log(link);
    //display the data from Napster with jQuery & Bootstrap
    var artistInfoCard = $("<div>").addClass("card");
    var artistInfoTriviaText = $("<p>").addClass("card-text");
    var artistInfoName = $("<h5>").addClass("card-title");
    var artistTextWrapper = $("<div>").addClass("card-body");
    var artistInfoImage = $("<img>").addClass("card-img-top");

    artistInfoName.text(randomArtistInfo.name);
    if (randomArtistInfo.blurbs.length === 0) {
      artistInfoTriviaText.text = null;
    } else {
      artistInfoTriviaText.text(
        "Trivia: " + randomArtistInfo.blurbs[Math.floor(Math.random() * 5)]
      );
    }

    artistInfoImage.attr("src", link);

    artistTextWrapper.append(artistInfoName);
    artistTextWrapper.append(artistInfoTriviaText);
    artistInfoCard.append(artistInfoImage);
    artistInfoCard.append(artistTextWrapper);
    $(".news").append(artistInfoCard);
  });
}
