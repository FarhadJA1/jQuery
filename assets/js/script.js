$(document).ready(function () {
    let list = $(".list-group-item")

    list.click(function () {
        list.hide("slow")
    })

    $(".show-list").click(function () {
        list.show("slow")
    })

    $(".show-hide").click(function () {
        list.toggle("slow")
    })

    $(".fadeIn").click(function () {
        $(".box").fadeIn();
    })
    $(".fadeOut").click(function () {
        $(".box").fadeOut();
    })
    $(".fadeToggle").click(function () {
        $(".box").fadeToggle();
    })
    $(".fadeIn").click(function () {
        $(".box").fadeTo("slow");
    })
    $(".slide-down").click(function () {
        $(".box").slideDown();
    })
    $(".slide-up").click(function () {
        $(".box").slideUp();
    })
    $(".slide-toggle").click(function () {
        $(".box").slideToggle("slow");
    })
    $(".animate").click(function () {
        $(".box").animate({
            left:"250px",
            height:"150px",
            width:"150px"

        });
    })
    let id = $(".box").attr("id");
    console.log(id);

    $(".box").text("Salam");
    $(".box").html("<h1>Sagol</h1>");
    $(".box").append("append");
    $(".box").prepend("prepend");
    

    $(".remove-li").click(function () {
        list.remove();
    })
    $(".empty-li").click(function () {
        list.empty();
    })

    $("h1").css("color","yellow")

    










})

