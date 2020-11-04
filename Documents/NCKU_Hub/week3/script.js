$( document ).ready(function() {

    $(".btn").click(function() {
        $(".intro")
            .text("hell world")
            .css("font-size","40px")
            .fadeOut(3000)
            .append("<a href='https://www.gamer.com.tw/'></a>")
    })

    $("ul li").first().text("第一個啦")
});
