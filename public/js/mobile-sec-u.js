$("#new-sec-1").show()
$("#new-sec-2").hide()
$("#new-sec-3").hide()
$("#new-sec-4").hide()
$("#new-btn-1").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#new-btn-2").removeClass("button-active")
        $("#new-btn-2").addClass("clickble");
        $("#new-btn-3").removeClass("button-active")
        $("#new-btn-3").addClass("clickble");
        $("#new-btn-4").removeClass("button-active")
        $("#new-btn-4").addClass("clickble");

        $("#new-sec-4").hide(200);
        $("#new-sec-3").hide(200);
        $("#new-sec-2").hide(200);
        $("#new-sec-1").show(200);
});

$("#new-btn-2").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#new-btn-1").removeClass("button-active")
        $("#new-btn-1").addClass("clickble");
        $("#new-btn-3").removeClass("button-active")
        $("#new-btn-3").addClass("clickble");
        $("#new-btn-4").removeClass("button-active")
        $("#new-btn-4").addClass("clickble");

        $("#new-sec-4").hide(200);
        $("#new-sec-3").hide(200);
        $("#new-sec-1").hide(200);
        $("#new-sec-2").show(200);
});
$("#new-btn-3").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#new-btn-2").removeClass("button-active")
        $("#new-btn-2").addClass("clickble");
        $("#new-btn-1").removeClass("button-active")
        $("#new-btn-1").addClass("clickble");
        $("#new-btn-4").removeClass("button-active")
        $("#new-btn-4").addClass("clickble");

        $("#new-sec-4").hide(200);
        $("#new-sec-1").hide(200);
        $("#new-sec-2").hide(200);
        $("#new-sec-3").show(200);
});
$("#new-btn-4").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#new-btn-2").removeClass("button-active")
        $("#new-btn-2").addClass("clickble");
        $("#new-btn-3").removeClass("button-active")
        $("#new-btn-3").addClass("clickble");
        $("#new-btn-1").removeClass("button-active")
        $("#new-btn-1").addClass("clickble");

        $("#new-sec-1").hide(200);
        $("#new-sec-3").hide(200);
        $("#new-sec-2").hide(200);
        $("#new-sec-4").show(200);
});