var apiKey = "563492ad6f917000010000011d8a4d59e1104cf883c51b9a5999f5ba";
var randomNumber = Math.floor(Math.random() * 100);
const IMAGES_TRENDING_API = `https://api.pexels.com/v1/curated?per_page=3&page=${randomNumber}`;
const IMAGES_SEARCH_API = `https://api.pexels.com/v1/search?per_page=3&page=${randomNumber}`;

function fetchImages(url) {
    $.ajax({
        type: "GET",
        url: url,
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", apiKey);
        }
    }).then(function (response) {
        var imageurl = response.photos[0].src.large;
        var imageurl2 = response.photos[1].src.large;
        var imageurl3 = response.photos[2].src.large;


        $("#first-slide").attr("src", imageurl);
        $("#second-slide").attr("src", imageurl2);
        $("#third-slide").attr("src", imageurl3);
    });
}

function fetchTrendingImages() {
    return fetchImages(IMAGES_TRENDING_API);
}

function getImagesData(searchTerm) {
    return fetchImages(`${IMAGES_SEARCH_API}&query=${searchTerm}`);
}