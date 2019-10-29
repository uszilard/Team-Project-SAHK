var keyNews = "7534abe7f3414a5181ffd55cfd6ce0c2";
var queryURLNews =
  "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=7534abe7f3414a5181ffd55cfd6ce0c2";
var newsFeed = $("#news-feed");

//get the data from newsapi
$.ajax({
  url: queryURLNews,
  method: "GET"
}).then(function(response) {
  getNews(response);
});

function getNews(response) {
  for (var i = 0; i < 5; i++) {
    var linkImage = response.articles[i].urlToImage;
    var linkFullArticle = response.articles[i].url;
    //display news articles with jQuery & Bootstrap
    var articleInfoCard = $("<div>").addClass("card");
    var articleText = $("<p>")
      .addClass("card-text")
      .text(response.articles[i].description);
    var articleTitle = $("<h5>")
      .addClass("card-title")
      .text(response.articles[i].title);
    var articleTextWrapper = $("<div>").addClass("card-body");
    var articleImage = $("<img>")
      .addClass("card-img-top")
      .attr("src", linkImage);
    var articleFullLink = $("<a>")
      .addClass("card-link")
      .attr("href", linkFullArticle)
      .text("Continue to the full article...");

    articleTextWrapper.append(articleTitle);
    articleTextWrapper.append(articleText);
    articleTextWrapper.append(articleFullLink);
    articleInfoCard.append(articleImage);
    articleInfoCard.append(articleTextWrapper);
    newsFeed.append(articleInfoCard);
  }
}
