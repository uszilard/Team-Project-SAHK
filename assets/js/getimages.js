function getImagesData(searchTerm) {

    var apiKey = "563492ad6f917000010000011d8a4d59e1104cf883c51b9a5999f5ba";
    var queryURL = "https://api.pexels.com/v1/search?query=" + searchTerm;
    $.ajax({
        type: "GET",
        url: queryURL,
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", apiKey);
        }

    }).then(function (response) {
        console.log(response)
        $("#carousel-inner").empty()

        response.photos.forEach((photo) => {

            var carouselItem = $("<div>")
            carouselItem.attr("class", "carousel-item active")

            var photoBox = $("<img>")
            photoBox.attr("src", photo.src.small)
            photoBox.attr("class", "mg-fluid d-block d-none d-md-block");





            $(".carousel-inner").append(carouselItem)


        });
    });
};

// <div class="carousel-item active">
    //<img src="..." class="d-block w-100" alt="..." />
//</div>