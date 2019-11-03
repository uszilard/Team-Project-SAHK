var keyNews = "7534abe7f3414a5181ffd55cfd6ce0c2";
var queryURLNews =
  "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=" + keyNews;
var newsFeed = $("#news-feed");

//display the initial content of the news section
function getNews(response, numberOfArticles) {
  for (var i = 0; i < numberOfArticles; i++) {
    var linkImage = response.articles[i].urlToImage;
    var linkFullArticle = response.articles[i].url;
    //display news articles with jQuery & Bootstrap
    var articleInfoCard = $("<div>").addClass("row mb-3");
    var articleText = $("<p>")
      .addClass("card-text")
      .text(response.articles[i].title);

    var articleTextWrapper = $("<div>").addClass("card-body col-md-6");
    var articleImage = $("<img>")
      .addClass("card-img col-md-6")
      .attr("src", linkImage)
      .attr("alt", "no image");
    var articleFullLink = $("<a>")
      .addClass("card-link")
      .attr("href", linkFullArticle)
      .attr("target", "_blank")
      .text("To the full article ->");

    articleTextWrapper.append(articleText);
    articleTextWrapper.append(articleFullLink);
    articleInfoCard.append(articleImage);
    articleInfoCard.append(articleTextWrapper);
    newsFeed.append(articleInfoCard);
  }
}

//displaying news mentioning the word/phrase of the user input
function displayNewsBySearchWord(userInput) {
  var queryURLuserInputNews =
    "https://newsapi.org/v2/everything?domains=mtv.com,mtv.co.uk&q=" +
    userInput +
    "&apiKey=" +
    keyNews;

  $.ajax({
    url: queryURLuserInputNews,
    method: "GET"
  }).then(function(response) {
    newsFeed.empty();
    $("#news-title").text("'" + userInput + "'" + " in the news");
    if (response.totalResults == 0) {
      var noNewsText = $("<h4>").addClass("no-news");
      var noNewsImage = $("<img>")
        .attr("src", "assets/css/notfound.jpg")
        .attr("width", "100%");
      noNewsText.text(
        "'" +
          userInput +
          "' has been under the radar for a while now... Sorry about that! Try again in a few months!"
      );
      newsFeed.append(noNewsText);
      newsFeed.append(noNewsImage);
    } else {
      getNews(response, 3);
    }
  });
}

//getting the initial content of the news section
$.ajax({
  url: queryURLNews,
  method: "GET"
}).then(function(response) {
  getNews(response, 3);
});

//Displaying relevant news on search
$("#search-btn").on("click", function(event) {
  event.preventDefault();
  var searchTerm = $("#user-search").val();
  displayNewsBySearchWord(searchTerm);
});

function noNews() {
  var noNewsText = $("<p>").addClass("no-news");
  var noNewsImage = $("<img>").attr("src", "../css/notfound.jpg");
  noNewsText.text(
    "'" +
      userInput +
      "' has been under the radar for a while now... Sorry about that! Try again in a few months!"
  );
  newsFeed.append(noNewsImage);
  newsFeed.append(noNewsText);
}
