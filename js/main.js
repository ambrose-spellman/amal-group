$(document).ready(function () {
  $(".autopark_slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false
  }),
    $(".sert_slider").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
  	$("#menu").on("click", "a", function (event) {
  	    event.preventDefault();
  	    var id = $(this).attr('href');
  	    var top = $(id).offset().top;
  	    $('body,html').animate({
  	        scrollTop: top
  	    }, 1500);
  	});
    $("a.scroll").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1000);
        return false;
    });
    var mymap = L.map('map').setView([42.859238840375546, 74.6160881290665], 16);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FrdXJhaGFydW5vIiwiYSI6ImNqOW50bTdubTIxbXAyd3A3bW1iejc4dDkifQ.tWh74Oyw2dRbkBbECb9wzg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([42.859561, 74.617413]).addTo(mymap);
})

    function myFunction() {
        var x = document.getElementById("centered_nav");
        if (x.className === "rc_nav") {
            x.className += " responsive";
        } else {
            x.className = "rc_nav";
        }
    }