$(function () {

    $(".menu").on("change", function(event){
        let $selection = $('.menu').val()
        console.log($selection)


        $.getJSON("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e")
        .done(function(data) {
          console.log(data.results)

        $(".results").append(`<img src="${data.results[0].multimedia[3].url}"><p>${data.results[0].multimedia[3].caption}</p>`);

    })

             .fail(function(){
              alert("your request didn't go through")
            })   

    })
})


