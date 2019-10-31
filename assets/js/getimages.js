function getImagesData(searchTerm) {

    console.log("i am getting tjhe images");
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
        $("#pictures").empty()

        response.photos.forEach((photo) => {

            var photoBox = $("<img>")
            photoBox.attr("src", photo.src.small)

            $("#pictures").append(photoBox)



        });
    })


};