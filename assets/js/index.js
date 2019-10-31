

// Search Function
$("#search-btn").on("click", function (event) {
    event.preventDefault();

    var userSearchInput = $("#user-search").val();

    console.log(userSearchInput);

    searchYouTubeByKeyword(userSearchInput);
    searchLastFmByKeyword(userSearchInput);
});
//

