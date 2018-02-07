$(document).ready(function() {
    console.log('Documento listo');
    init();






  

});

var init = function() {
    carousel();
}

var carousel = function () {
     // Call carousel manually
     $('#myCarouselCustom').carousel();
     
    // Go to the previous item
    $("#prevBtn").click(function(){
         $("#myCarouselCustom").carousel("prev");
    });
    // Go to the previous item
    $("#nextBtn").click(function(){
        $("#myCarouselCustom").carousel("next");
    });
}