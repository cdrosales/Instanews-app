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

        for (let $i=0; $i < $($results).length; $i++) {

            for (let $j=0; $j < $($results[$i].multimedia[4]).length; $j++) {

              let $img = $results[$i].multimedia[4].url

              let $caption = $results[$i].abstract

              let $type = $results[$i].multimedia[4].type
 
              if ($type === "image"){
                $type = true;
              } if ($j > 12){
                return false;
              }
              $(".results").append(`<div class="grid ${$selection}"><img src="${$img}" class="image"><p>${$caption}</p></div>`);
          }
        }
              $(".newsContainer").hide();
              $(".newsContainer").toggle('slow').show();
              // $(".loader").show();
      })

             .fail(function(){
              alert("your request didn't go through")
            })   
    })
})


