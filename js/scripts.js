$(function(){                                             //JQuery code for carousel buttons to work
    $(".carousel").carousel( { interval: 2000 } );       //sets interval to 2 seconds
    $("#carouselButton").click(function(){                // when button is clicked it run code below it
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {     //looks for children of class 
            $(".carousel").carousel("pause");                              // pauses if children are found
            $("#carouselButton").children("i").removeClass("fa-pause");    //removes pause button
            $("#carouselButton").children("i").addClass("fa-play");        //adds play button in place of pause button
        } else {                                                           //looks for play button and changes it to pause button
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});


$('#reserveButton').click(function(){
    $('#reserveModal').modal('show')
});

$('#loginButton').click(function(){
    $('#loginModal').modal('show')
});