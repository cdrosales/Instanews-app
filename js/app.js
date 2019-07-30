$(function () {




    $(".menu").on("change", function(event){
      let $selection = $('.menu').val()
      console.log($selection)

      // let $target = event.target
      // console.log($(event.target).val())

      $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e`)
      .done(function(data) {
      // console.log(data.results)

        let $newsC = $(".newsContainer")
        // console.log($newsC)
      
        $newsC.hide()
        $newsC.toggle('fast').show()
       

        $(".item1").append(`<img src="${data.results[0].multimedia[4].url}"><p>${data.results[0].abstract}</p>`);
        $(".item2").append(`<img src="${data.results[1].multimedia[4].url}"><p>${data.results[1].abstract}</p>`);
        $(".item3").append(`<img src="${data.results[2].multimedia[4].url}"><p>${data.results[2].abstract}</p>`);
        $(".item4").append(`<img src="${data.results[3].multimedia[4].url}"><p>${data.results[3].abstract}</p>`);
        $(".item5").append(`<img src="${data.results[4].multimedia[4].url}"><p>${data.results[4].abstract}</p>`);
        $(".item6").append(`<img src="${data.results[5].multimedia[4].url}"><p>${data.results[5].abstract}</p>`);
        $(".item7").append(`<img src="${data.results[6].multimedia[4].url}"><p>${data.results[6].abstract}</p>`);
        $(".item8").append(`<img src="${data.results[7].multimedia[4].url}"><p>${data.results[7].abstract}</p>`);
        $(".item9").append(`<img src="${data.results[8].multimedia[4].url}"><p>${data.results[8].abstract}</p>`);
        $(".item10").append(`<img src="${data.results[9].multimedia[4].url}"><p>${data.results[9].abstract}</p>`);
        $(".item11").append(`<img src="${data.results[10].multimedia[4].url}"><p>${data.results[10].abstract}</p>`);
        $(".item12").append(`<img src="${data.results[11].multimedia[4].url}"><p>${data.results[11].abstract}</p>`);


        // $(".menu").reset();
    })

             .fail(function(){
              alert("your request didn't go through")
            })   

    })
})


