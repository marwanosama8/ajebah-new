$("#mobile-sec-1").show()
$("#mobile-sec-2").hide()
$("#mobile-sec-3").hide()
$("#mobile-sec-4").hide()
$("#mobile-sec-5").hide()
$("#mobile-btn-1").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#mobile-btn-2").removeClass("button-active")
        $("#mobile-btn-2").addClass("clickble");
        $("#mobile-btn-3").removeClass("button-active")
        $("#mobile-btn-3").addClass("clickble");
        $("#mobile-btn-4").removeClass("button-active")
        $("#mobile-btn-4").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");

        $("#mobile-sec-5").hide(200);
        $("#mobile-sec-4").hide(200);
        $("#mobile-sec-3").hide(200);
        $("#mobile-sec-2").hide(200);
        $("#mobile-sec-1").show(200);
});

$("#mobile-btn-2").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#mobile-btn-1").removeClass("button-active")
        $("#mobile-btn-1").addClass("clickble");
        $("#mobile-btn-3").removeClass("button-active")
        $("#mobile-btn-3").addClass("clickble");
        $("#mobile-btn-4").removeClass("button-active")
        $("#mobile-btn-4").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");

        $("#mobile-sec-5").hide(200);
        $("#mobile-sec-4").hide(200);
        $("#mobile-sec-3").hide(200);
        $("#mobile-sec-1").hide(200);
        $("#mobile-sec-2").show(200);
});
$("#mobile-btn-3").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#mobile-btn-2").removeClass("button-active")
        $("#mobile-btn-2").addClass("clickble");
        $("#mobile-btn-1").removeClass("button-active")
        $("#mobile-btn-1").addClass("clickble");
        $("#mobile-btn-4").removeClass("button-active")
        $("#mobile-btn-4").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");

        $("#mobile-sec-5").hide(200);
        $("#mobile-sec-4").hide(200);
        $("#mobile-sec-1").hide(200);
        $("#mobile-sec-2").hide(200);
        $("#mobile-sec-3").show(200);
});
$("#mobile-btn-4").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#mobile-btn-2").removeClass("button-active")
        $("#mobile-btn-2").addClass("clickble");
        $("#mobile-btn-3").removeClass("button-active")
        $("#mobile-btn-3").addClass("clickble");
        $("#mobile-btn-1").removeClass("button-active")
        $("#mobile-btn-1").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");
        $("#mobile-btn-5").addClass("clickble");

        $("#mobile-sec-5").hide(200);
        $("#mobile-sec-1").hide(200);
        $("#mobile-sec-3").hide(200);
        $("#mobile-sec-2").hide(200);
        $("#mobile-sec-4").show(200);
});
$("#mobile-btn-5").click(function () {
        $(this).addClass("button-active");
        $(this).removeClass("clickble")
        $("#mobile-btn-2").removeClass("button-active")
        $("#mobile-btn-2").addClass("clickble");
        $("#mobile-btn-3").removeClass("button-active")
        $("#mobile-btn-3").addClass("clickble");
        $("#mobile-btn-4").removeClass("button-active")
        $("#mobile-btn-4").addClass("clickble");
        $("#mobile-btn-1").addClass("clickble");
        $("#mobile-btn-1").addClass("clickble");

        $("#mobile-sec-1").hide(200);
        $("#mobile-sec-4").hide(200);
        $("#mobile-sec-3").hide(200);
        $("#mobile-sec-2").hide(200);
        $("#mobile-sec-5").show(200);
});
// industry section
$("#industry-section-1").show()
$("#industry-section-2").hide()
$("#industry-section-3").hide()
$("#industry-section-4").hide()
let industry1 = $("#industry-btn-1")
let industry2 = $("#industry-btn-2")
let industry3 = $("#industry-btn-3")
let industry4 = $("#industry-btn-4")


industry1.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#industry-btn-2").removeClass("button-active")
        $("#industry-btn-2").addClass("clickble");
        $("#industry-btn-3").removeClass("button-active")
        $("#industry-btn-3").addClass("clickble");
        $("#industry-btn-4").removeClass("button-active")
        $("#industry-btn-4").addClass("clickble");

        $("#industry-section-2").hide(200);
        $("#industry-section-3").hide(200);
        $("#industry-section-4").hide(200);
        $("#industry-section-1").show(200);
})
industry2.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#industry-btn-1").removeClass("button-active")
        $("#industry-btn-1").addClass("clickble");
        $("#industry-btn-3").removeClass("button-active")
        $("#industry-btn-3").addClass("clickble");
        $("#industry-btn-4").removeClass("button-active")
        $("#industry-btn-4").addClass("clickble");

        $("#industry-section-4").hide(200);
        $("#industry-section-1").hide(200);
        $("#industry-section-3").hide(200);
        $("#industry-section-2").show(200);
})
industry3.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#industry-btn-1").removeClass("button-active")
        $("#industry-btn-1").addClass("clickble");
        $("#industry-btn-2").removeClass("button-active")
        $("#industry-btn-2").addClass("clickble");
        $("#industry-btn-4").removeClass("button-active")
        $("#industry-btn-4").addClass("clickble");

        $("#industry-section-2").hide(200);
        $("#industry-section-1").hide(200);
        $("#industry-section-4").hide(200);
        $("#industry-section-3").show(200);
})
industry4.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#industry-btn-1").removeClass("button-active")
        $("#industry-btn-1").addClass("clickble");
        $("#industry-btn-2").removeClass("button-active")
        $("#industry-btn-2").addClass("clickble");
        $("#industry-btn-3").removeClass("button-active")
        $("#industry-btn-3").addClass("clickble");

        $("#industry-section-2").hide(200);
        $("#industry-section-1").hide(200);
        $("#industry-section-3").hide(200);
        $("#industry-section-4").show(200);
})


// demond sec

$("#demond-section-1").show()
$("#demond-section-2").hide()
$("#demond-section-3").hide()
let demond1 = $("#demond-btn-1")
let demond2 = $("#demond-btn-2")
let demond3 = $("#demond-btn-3")

demond1.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#demond-btn-2").removeClass("button-active")
        $("#demond-btn-2").addClass("clickble");
        $("#demond-btn-3").removeClass("button-active")
        $("#demond-btn-3").addClass("clickble");

        $("#demond-section-2").hide(200);
        $("#demond-section-3").hide(200);
        $("#demond-section-1").show(200);
})
demond2.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#demond-btn-1").removeClass("button-active")
        $("#demond-btn-1").addClass("clickble");
        $("#demond-btn-3").removeClass("button-active")
        $("#demond-btn-3").addClass("clickble");

        $("#demond-section-1").hide(200);
        $("#demond-section-3").hide(200);
        $("#demond-section-2").show(200);
})
demond3.click(function(){
        $(this).addClass("button-active")
        $(this).removeClass("clickble")
        $("#demond-btn-1").removeClass("button-active")
        $("#demond-btn-1").addClass("clickble");
        $("#demond-btn-2").removeClass("button-active")
        $("#demond-btn-2").addClass("clickble");

        $("#demond-section-1").hide(200);
        $("#demond-section-2").hide(200);
        $("#demond-section-3").show(200);
})