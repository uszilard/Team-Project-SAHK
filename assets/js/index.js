// Search Function
$("#search-btn").on("click", function (event) {
  event.preventDefault();

  var userSearchInput = $("#user-search").val();
  var searchTermText = $(".searchTerm");
  searchTermText.html(userSearchInput);

  searchYouTubeByKeyword(userSearchInput);
  searchLastFmByKeyword(userSearchInput);
  displayNewsBySearchWord(userSearchInput);
  getImagesData(userSearchInput);
});


$(document).ready(() => {
  loadInitialNews().then(() => console.log('News Loaded from index.js'));
  loadInitialVideos().then(() => console.log('Videos Loaded from index.js'));
  fetchTrendingImages().then(() => console.log('Images loaded from index.js'))
});

// Execute a function when the user releases a key on the keyboard
document.addEventListener("keyup", function (event) {
  // Cancel the default action, if needed
  event.preventDefault()

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    //This code when I press on enter on the form (inside the website)
    console.log("I am working , stop pushing me")

    // Trigger the button element with a click

    $("#myInput").trigger("click");

  }
});
