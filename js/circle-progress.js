let options = {

    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: { gradient: ['#ee2288', '#f78bbd'] }
}

$(".skills__card .circle__bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find(".circle__span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });

$(".angular .circle__bar").circleProgress({
    value: 0.60
});

$(".css .circle__bar").circleProgress({
    value: 0.50
});

$(".bootstrap .circle__bar").circleProgress({
    value: 0.70
});

$(".git .circle__bar").circleProgress({
    value: 0.60
});

$(".html .circle__bar").circleProgress({
    value: 0.70
});

$(".java .circle__bar").circleProgress({
    value: 0.70
});

$(".js .circle__bar").circleProgress({
    value: 0.50
});

$(".mysql .circle__bar").circleProgress({
    value: 0.70
});

$(".react .circle__bar").circleProgress({
    value: 0.30
});

$(".spring .circle__bar").circleProgress({
    value: 0.60
});

$(".thymeleaf .circle__bar").circleProgress({
    value: 0.50
});

$(".typescript .circle__bar").circleProgress({
    value: 0.60
});