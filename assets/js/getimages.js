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
        console.log("i am responding to you", response)
        $("#carousel-inner").empty()

        response.photos.forEach((photo, i) => {

            var carouselItem = $("<div>")
            carouselItem.attr("class", "carousel-item")

            var photoBox = $("<img>")
            photoBox.attr("src", photo.src.medium)
            photoBox.attr("class", "img-fluid d-block w-100");
            photoBox.attr("alt", photo.id)

            if (i === 0) {
                photoBox.attr("class", "img-fluid d-block w-100 active");

            }

            carouselItem.append(photoBox)

            console.log($(".carousel-inner"))





            $(".carousel-inner").append(carouselItem)


        });
    });
};
