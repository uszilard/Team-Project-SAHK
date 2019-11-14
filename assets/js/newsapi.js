//I can't use the same variable names like other files ;-), I have to create a new variable
const NEWS_API_KEY = "7534abe7f3414a5181ffd55cfd6ce0c2";
const LATEST_HEADLINES_ENDPOINT = `https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=${NEWS_API_KEY}`;
const NEWS_SEARCH_ENDPOINT = `https://newsapi.org/v2/everything?domains=mtv.com,mtv.co.uk&apiKey=${NEWS_API_KEY}`;
var newsFeed = $("#news-feed");
const MAX_NEWS_TO_SHOW = 3;

//This is a common function, reused for initial load and for search requests too
function renderNews(articles) {
  articles.forEach(article => {
    var linkImage = article.urlToImage;
    var linkFullArticle = article.url;
    //display news articles with jQuery & Bootstrap
    var articleInfoCard = $("<div>").addClass("row mb-3");
    var articleText = $("<p>")
      .addClass("card-text")
      .html("<b>" + article.title + "</b><br>" + article.description);

    var articleTextWrapper = $("<div>").addClass("card-body col-xl-6");
    var articleImage = $("<img>")
      .addClass("card-img col-xl-6")
      .attr("src", linkImage)
      .attr("alt", "no image");
    var articleFullLink = $("<a>")
      .addClass("card-link")
      .attr("href", linkFullArticle)
      .attr("target", "_blank")
      .text("To the full article on Mtv.com  ->");

    articleTextWrapper.append(articleText);
    articleTextWrapper.append(articleFullLink);
    articleInfoCard.append(articleImage);
    articleInfoCard.append(articleTextWrapper);
    newsFeed.append(articleInfoCard);
  });
}

//displaying news mentioning the word/phrase of the user input
function displayNewsBySearchWord(userInput) {
  console.log(`${NEWS_SEARCH_ENDPOINT}&q=${userInput}`);
  $.ajax({
    url: `${NEWS_SEARCH_ENDPOINT}&q=${userInput}`,
    method: "GET"
  }).then(function(response) {
    //this is a promise ;-)
    newsFeed.empty();
    $(".no-news").addClass('is-hidden');
    $("#news-title").html(
      `'${userInput}' in the news <i class='fas fa-newspaper'></i>`
    );
    if (!parseInt(response.totalResults) === 0) {
      $(".no-news").removeClass('is-hidden');
    } else {
      renderNews(response.articles);
    }
  });
}

//getting the initial content of the news section
//Why not use $(document).ready(function () {... here ?
function loadInitialNews() {
  return $.ajax({
    url: LATEST_HEADLINES_ENDPOINT,
    method: "GET"
  }).then(function(response) {
    //this is a promise ;-)
    renderNews(response.articles);
  })
}