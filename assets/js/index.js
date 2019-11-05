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

// Get the input field

// Execute a function when the user releases a key on the keyboard
document.addEventListener("keyup", function (event) {
  event.preventDefault();

  console.log(event)

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    console.log("i AM RUNNING")
    // Cancel the default action, if needed
    // Trigger the button element with a click
    $("#myInput").click();
    window.location = window.location + "/mainpage.html"
  }
});