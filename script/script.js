$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            // Show fixed nav
            $('.navbar').addClass('fixed-top');

        } else {

            // Hide white nav
            $("nav").removeClass("fixed-top");

        }
    }
});

$('.home-new-arrival-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});




$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$(function () {

    // show/hide nav on page load
    scrollTop();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        scrollTop();
    });

    function scrollTop() {

        if ($(window).scrollTop() > 500) {
            // Show scroll to top button
            $('.scroll-to-top-button').show();

        } else {

            // Hide scroll to top button
            $('.scroll-to-top-button').hide();
        }
    }
});




//xzoom box

$(function () {
    $(".xzoom, .xzoom-gallery").xzoom({
        tint: '#333',
        Xoffset: 15
    });
});

//xzoom box


//responsive tabs

$('#product-detailed-information-links').responsiveTabs({
    startCollapsed: 'accordion',
    active: 0
});
//responsive tabs



//owl-carousel

$('.related-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});


//owl-carousel
$('.recently-viewed-products').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});
//owl-carousel
