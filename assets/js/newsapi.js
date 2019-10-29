var keyNews = "7534abe7f3414a5181ffd55cfd6ce0c2";
var queryURLNews =
  "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=" + keyNews;
var newsFeed = $("#news-feed");

//display the initial content of the news section
function getNews(response, numberArticles) {
  for (var i = 0; i < numberArticles; i++) {
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

//displaying news mentioning the word/phrase of the user input
function displayNewsBySearchWord(userInput) {
  var queryURLuserInputNews =
    "https://newsapi.org/v2/everything?domains=mtv.com&q=" +
    userInput +
    "&apiKey=" +
    keyNews;

  $.ajax({
    url: queryURLuserInputNews,
    method: "GET"
  }).then(function(response) {
    newsFeed.empty();
    getNews(response, response.articles.length);
  });
}

//getting the initial content of the news section
$.ajax({
  url: queryURLNews,
  method: "GET"
}).then(function(response) {
  console.log(response);
  getNews(response, 5); //the second parameter is how many articles to display in the section, less for mobile version
});

// Search Function & displaying relevant news
$("#search-btn").on("click", function(event) {
  event.preventDefault();
  var userSearchInput = $("#user-search").val();
  displayNewsBySearchWord(userSearchInput);
});
