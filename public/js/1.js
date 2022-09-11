if ($('.unlimited-services').length > 0) {
    $(".unlimited-services.forservices .services-tabs_content").hide();
    $(".unlimited-services.forservices .services-tabs_content:first").show();

    $(".unlimited-services.forservices ul.services-tabs li").click(function () {

        // $("html, body").animate({ scrollTop: $('.unlimited-services.forservices .unlimited-services-tabs').offset().top - 100 }, 600);

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