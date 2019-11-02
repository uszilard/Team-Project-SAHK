var apiKey = "563492ad6f917000010000011d8a4d59e1104cf883c51b9a5999f5ba";
var queryURL = "https://api.pexels.com/v1/curated?per_page=1&page=1";

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: queryURL,
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", apiKey);
    }
  }).then(function(response) {
    console.log("i am responding to you", response);
    var imageurl = response.photos[0].src.original;
    console.log(imageurl);
    $("#first-slide").attr("src", imageurl);
  });
});
