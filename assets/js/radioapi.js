//
$(".radioBtn").on("click", function (event) {
    event.preventDefault();

    var userSearchInput = $("#user-search").val();

    console.log(userSearchInput);

    searchByKeyword(userSearchInput);
});

function displayMusicInfo() { }

displayMusicInfo();
//