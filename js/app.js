$(function () {

    $(".menu").on("change", function(event){
      let $selection = $('.menu').val()
      // console.log($selection)

      // let $target = event.target
      // console.log($(event.target).val())
    
      $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e`)
      .done(function(data) {
      // console.log(data)

        let $results = (data.results)
        console.log($results)

        for (let $i=0; $i < $($results).length; $i++) {
            for (let $j=0; $j < $($results[$i].multimedia[4]).length; $j++) {

              let $img = $results[$i].multimedia[4].url
              // console.log($img)

              // let $caption = $results[$i].multimedia[4].caption
              let $caption = $results[$i].abstract
              // console.log($caption)

              let $type = $results[$i].multimedia[4].type
              // console.log($type)
          
              let $noImg =$results[$i].multimedia[$i]
              // console.log($noImg)

              if ($type === "image"){
                $type = true;

                $(".results").append(`<div class="grid"><img src="${$img}"><p>${$caption}</p></div>`);
              } else if ($type >= 12){
                return false;
                console.log("12")
              } 
          }
        }

              let $newsC = $(".newsContainer")
              // console.log($newsC)
              $newsC.hide()   
              $newsC.toggle('slow').show()
      })

             .fail(function(){
              alert("your request didn't go through")
            })   
    })
})


