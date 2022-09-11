const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


if ($('.unlimited-services').length > 0) {
  $(".unlimited-services.forservices .services-tabs_content").hide();
  $(".unlimited-services.forservices .services-tabs_content:first").show();

  $(".unlimited-services.forservices ul.services-tabs li").click(function () {

    $("html, body").animate({ scrollTop: $('.unlimited-services.forservices .unlimited-services-tabs').offset().top - 100 }, 600);

    $(".unlimited-services.forservices .services-tabs_content").hide();
    var activeTab = $(this).attr("rel");
    $(".unlimited-services.forservices #" + activeTab).fadeIn();

    $(".unlimited-services.forservices ul.services-tabs li").removeClass("active");
    $(this).addClass("active");

    $(".unlimited-services.forservices .tab_drawer_heading").removeClass("d_active");
    $(".unlimited-services.forservices .tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

  });
  $(".unlimited-services.forservices .services-tabs_container").css("min-height", function () {
    return $(".unlimited-services.forservices .services-tabs").outerHeight() + 0;
  });
  $(".unlimited-services.forservices .tab_drawer_heading").click(function () {

    $(".unlimited-services.forservices .services-tabs_content").hide();
    var d_activeTab = $(this).attr("rel");
    $(".unlimited-services.forservices #" + d_activeTab).fadeIn();

    $(".unlimited-services.forservices .tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $(".unlimited-services.forservices ul.services-tabs li").removeClass("active");
    $(".unlimited-services.forservices ul.services-tabs li[rel^='" + d_activeTab + "']").addClass("active");
  });
}

$(document).ready(function () {
  if ($('.unlimited-services').length > 0) {
    if ($('.sticky').length > 0) {
      var stickyTop = $('.unlimited-services.forservices .sticky').offset().top;
    }
    $(window).scroll(function () {
      var windowTop = $(window).scrollTop() + $('header').outerHeight();
      var moreoffset = ($('.unlimited-services.forservices .unlimited-services-tabs').offset().top + $('.unlimited-services.forservices .unlimited-services-tabs').outerHeight()) - $('.unlimited-services.forservices ul.services-tabs').outerHeight();
      if (stickyTop < windowTop && moreoffset > windowTop) {
        var sticky1 = '100px';
        var sticky2 = $('.unlimited-services.forservices .unlimited-services-tabs').offset().left;
        $('.unlimited-services.forservices .unlimited-services-tabs').addClass('fixedtop');
        $('.unlimited-services.forservices .sticky').css({ 'left': sticky2, 'top': sticky1 })
      } else {
        $('.unlimited-services.forservices .unlimited-services-tabs').removeClass('fixedtop');
        $('.unlimited-services.forservices .sticky').css({ 'left': 'auto', 'top': '0' })
      }

    });
  }
});

//  ###########################
$(document).ready(function(e) {
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
        centerPadding: '0px',
    });
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
        $('a[data-slide]').removeClass('active');
        $(this).addClass('active');
    });

    $(`.faq-accordian ul li > a`).click(function(e) {
        e.preventDefault();
        $('.faq-accordian ul li > p').slideUp();
        if ($(this).next('.faq-accordian ul li > p').is(':visible')) {
            $(this).removeClass('active');
            $(this).next('.faq-accordian ul li > p').slideUp();
        } else {
            $('.faq-accordian ul li > a').removeClass('active');
            $(this).addClass('active');
            $('.faq-accordian ul li > a').next('.faq-accordian ul li > p').slideUp();
            $(this).next('.faq-accordian ul li > p').slideToggle();
        }
    });

    $('.slick-initialized .slick-slide').click(function(e) {
        var slidenum = parseInt($(this).attr('data-slick-index')) + 1;
        $(".app-screen-flow .action a").removeClass('active');
        $(document).find(".app-screen-flow .action a[data-slide=" + slidenum + "]").addClass('active');
    })

});
// eeeeeeeeeeeeee

$(document).ready(function() {
    let lazy = lazyload();
    $('.scrollTo').click(function() {
        var getElem = $(this).attr('href');
        var targetDistance = 30;
        if ($(getElem).length) {
            var getOffset = $(getElem).offset().top;
            $('html,body').animate({
                scrollTop: getOffset - targetDistance
            }, 500);
        }
        return false;
    });

    $('.other-services').slick({
        //autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='images/gojek-clone-overview-2022/left.png' alt=''>",
        nextArrow: "<img class='a-right control-c next slick-next' src='images/gojek-clone-overview-2022/right.png' alt=''>",
        responsive: [{
                breakpoint: 1281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

})