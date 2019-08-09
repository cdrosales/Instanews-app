$(function () {

    $(".menu").on("change", function(event){
      let $selection = $('.menu').val()
      console.log($selection)

        $(".logo").toggleClass("imgResize");
        $(".container").toggleClass("containerResize");
        $(".selection").toggleClass("changeSelection");
        $(".loader").toggleClass("changeLoader");


      let $target = $(event.target).val()
      console.log($target)
    
      $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e`)
      .done(function(data) {

        let $results = (data.results)
        console.log($results)

        $(".results").empty();

        let $imageArticles = $results.filter(article => article.multimedia[4])
        let $onlyTwelve = $imageArticles.splice(0,12)

       

        console.log(">>>>",$onlyTwelve)


       

        let $thisImage = $onlyTwelve.map(function($bar){
          let $image = $bar.multimedia[4].url
          let $caption = $bar.abstract
        $(".results").prepend(`<div class="grid ${$selection}"><img src="${$image}" class="image"><p>${$caption}</p></div>`);

        });


              $(".newsContainer").hide();
              $(".newsContainer").toggle('slow').show();

              $(".loaderContainer").hide();
              $(".loaderContainer").toggle('slow').show();

      })

             .fail(function(){
              alert("your request didn't go through")
            })   
    })

    
  
     
})


