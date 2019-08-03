$(function () {




    $(".menu").on("change", function(event){
      let $selection = $('.menu').val()
      // console.log($selection)

      let $target = event.target
      console.log($(event.target).val())

      

      $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=QcnDFNG7J6qlWHGfO0jTiGUL4b2ieG7e`)
      .done(function(data) {
      // console.log(data)

      let $results = (data.results)
      // console.log($results)

      for (let $i=0; $i < $($results).length; $i++) {
         for (let $j=0; $j < $($results[$i].multimedia[4]).length; $j++) {

              let $img = $results[$i].multimedia[4].url
              // console.log($img)

              let $caption = $results[$i].multimedia[4].caption
              console.log($caption)
              
              let $empty = ""
              // console.log($empty)

          if ($caption == $empty) {
            console.log("worked")
          } 
      // $(".results").append(`<div class="grid"><img src="${$img}"><p>${$caption}</p></div>`)


      
        } 
      }



      // var $arr = [
      //   [ 
      //     [1,2], [3,4], [5,6]
      //   ],
      //   [ 
      //     [11,12], [13,14], [15,16]
      //   ]
      // ];
      // for (var i=0; i < $($arr).length; i++) {
      //   for (var j=0; j < $($arr)[i].length; j++) {
      //     for (var k=0; k < $($arr)[i][j].length; k++) {

          
      //         console.log($arr[i][j][k]);
            
      //     }        
      //   } 
      // }

      // let $results = (data.results)
      // console.log($results)


        // let $url = $results.multimedia[4]
        // console.log($url)
        // $caption = value.multimedia[4].caption
        // console.log($caption);

     
   

        /// 0-12 // grab the first 12 articles.
      // let myArray = ["one", "two", "three", "four"];
      // for(let i = 0; i < myArray.length; i++){
      //    console.log(myArray.slice;
      // }


      // $x = 0
      // for ( $x = 0, $x <5; $x++){
      //   console.log($x)
      // }

    

      // $.each($results, function(index,value){
      //   // console.log("picture",value.multimedia[4])

      //   $url = value.multimedia[4]
      //   console.log($url)
      //   $caption = value.multimedia[4].caption
      //   console.log($caption);

      // $(".results").append(`<img src="${value.multimedia[4].url}"><p>${value.multimedia[4].caption}</p>`)


      // })




        //if/else statement
        // if the selected array has an image 
        //choose this image
        //if not skip to the next one
        
        

        // $(".item1").append(`<img src="${data.results[0].multimedia[4].url}"><p>${data.results[0].multimedia[4].caption}</p>`);
        // $(".item2").append(`<img src="${data.results[1].multimedia[4].url}"><p>${data.results[1].multimedia[4].caption}</p>`);
        // $(".item3").append(`<img src="${data.results[2].multimedia[4].url}"><p>${data.results[2].multimedia[4].caption}</p>`);
        // $(".item4").append(`<img src="${data.results[3].multimedia[4].url}"><p>${data.results[3].multimedia[4].caption}</p>`);
        // $(".item5").append(`<img src="${data.results[4].multimedia[4].url}"><p>${data.results[4].multimedia[4].caption}</p>`);
        // $(".item6").append(`<img src="${data.results[5].multimedia[4].url}"><p>${data.results[5].multimedia[4].caption}</p>`);
        // $(".item7").append(`<img src="${data.results[6].multimedia[4].url}"><p>${data.results[6].multimedia[4].caption}</p>`);
        // $(".item8").append(`<img src="${data.results[7].multimedia[4].url}"><p>${data.results[7].multimedia[4].caption}</p>`);
        // $(".item9").append(`<img src="${data.results[8].multimedia[4].url}"><p>${data.results[8].multimedia[4].caption}</p>`);
        // $(".item10").append(`<img src="${data.results[9].multimedia[4].url}"><p>${data.results[9].multimedia[4].caption}</p>`);
        // $(".item11").append(`<img src="${data.results[10].multimedia[4].url}"><p>${data.results[10].multimedia[4].caption}</p>`);
        // $(".item12").append(`<img src="${data.results[11].multimedia[4].url}"><p>${data.results[11].multimedia[4].caption}</p>`);


        // $(".results").append(`<img src="${data.results[].multimedia[4].url}"><p>${data.results[].multimedia[4].caption}</p>`);





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


