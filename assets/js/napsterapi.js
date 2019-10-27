// News Section block goes here, Hristina will take care of this for now
//when testing other sections, you can marked the below as a "comment" in order to avoid error messages
var keyNapster = "OTBhN2VjODUtZTEwOS00MGY0LTk1ODYtZDViNzFmY2RhMzMy";
var secretNapster = "ZmVmOTNmMGUtNGUwNS00NTNhLWEyY2ItNzYzNmNkZTIwZGY1";
var queryURLNapster =
    "http://api.napster.com/v2.2/artists/top?apikey=" + keyNapster + "&limit=50";

$.ajax({
    url: queryURLNapster,
    method: "GET"
}).then(function (response) {
    console.log(response);
    //choose random artist from the result
    //   var i =
    //   var randomArtist = response.artist.length;
});