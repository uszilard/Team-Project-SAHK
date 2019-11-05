// Search Function
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var userSearchInput = $("#user-search").val();

  searchYouTubeByKeyword(userSearchInput);
  searchLastFmByKeyword(userSearchInput);
  displayNewsBySearchWord(userSearchInput);
  //getImagesData(userSearchInput);
});
//
