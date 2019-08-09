$(function () {

    $(".menu").on("change", function(event){
      let $selection = $('.menu').val()
      console.log($selection)

        $(".logo").addClass("imgResize");
        $(".container").addClass("containerResize");
        $(".selection").addClass("changeSelection");
        $(".loader").addClass("changeLoader");

        $(".newsContainer").hide();
        $(".newsContainer").toggle('slow').show();

        $(".loaderContainer").toggle('slow').show();
        $(".loaderContainer").toggle("hidden");


      $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e`)
      .done(function(data) {

        let $results = (data.results)

        $(".results").empty();

        let $imageArticles = $results.filter(article => article.multimedia[4])
        let $onlyTwelve = $imageArticles.splice(0,12)

          $onlyTwelve.map(function($bar){
          let $image = $bar.multimedia[4].url
          let $caption = $bar.abstract

        $(".results").prepend(`<div class="grid ${$selection}"><img src="${$image}" class="image"><p>${$caption}</p></div>`);

        });

             

      })
             .fail(function(){
              alert("your request didn't go through")
            })   
    })

    
  
     
})


