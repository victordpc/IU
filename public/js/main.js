$(document).ready(function() {


    console.log('Documento listo');
    init();






  

});

var init = function() {
    carousel();
    manageDropdown();
    manageSttars();
    collapseAside();
};


var manageDropdown = function () {

    $('.main-menu .dropdown').on({
        'show.bs.dropdown': function () {
            $(this).children().first().addClass('selected')
        },
        'hide.bs.dropdown': function () {
            $(this).children().first().removeClass('selected')
        }
    });
};

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
};

var manageSttars = function () {
    $('.li-estrellas span').on({
        mouseover: function (e) {
            $(this).removeClass('glyphicon-star-empty').prevAll().removeClass('glyphicon-star-empty');
            $(this).addClass('glyphicon-star').prevAll().addClass('glyphicon-star');
        },
        mouseleave: function () {
            $(this).removeClass('glyphicon-star').prevAll().removeClass('glyphicon-star');
            $(this).addClass('glyphicon-star-empty').prevAll().addClass('glyphicon-star-empty');
        },
        click: function () {
            $(this).removeClass('glyphicon-star-empty').prevAll().removeClass('glyphicon-star-empty');
            $(this).addClass('glyphicon-star').prevAll().addClass('glyphicon-star');
            $('.li-estrellas span').off();
        }

    });
};

var collapseAside = function () {

    $('.item-aside-collapse').on({
        'show.bs.collapse': function () {
            $(this).children().first().removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
        },
        'hidden.bs.collapse': function () {
            $(this).children().first().removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
        }

    });
};