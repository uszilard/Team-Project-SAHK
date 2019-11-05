// Search Function
$("#search-btn").on("click", function (event) {
  event.preventDefault();

  var userSearchInput = $("#user-search").val();

  searchYouTubeByKeyword(userSearchInput);
  searchLastFmByKeyword(userSearchInput);
  displayNewsBySearchWord(userSearchInput);
  getImagesData(userSearchInput);
});
//

// Execute a function when the user releases a key on the keyboard
document.addEventListener("keyup", function (event) {
  // Cancel the default action, if needed
  event.preventDefault()

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {

    console.log("I am working , stop pushing me")

    // Trigger the button element with a click

    $("#myInput").trigger("click");

  }
});
