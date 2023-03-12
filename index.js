$(() => {
    $("#button").on("touchmove", function(event) {
        let touch = event.originalEvent.touches[0];
        let height = $(this).height() / 0.8;
        let width = $(this).width() / 1.5;
        let x = touch.clientX - width;
        let y = touch.clientY - height;

        $(this).css({
            "-webkit-transform": "translate3d("+ x + "px," + y + "px, 0)"
        })
    })
})