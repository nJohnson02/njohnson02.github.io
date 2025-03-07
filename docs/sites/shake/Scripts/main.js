var score = 0;
var red = 0;
var green = 0;
var blue = 0;

const reset = () => {
    red = 0;
    green = 0;
    blue = 0;
    alert("Neat, eh?");
    location.reload();
}

$(document).mousemove(() => {
    score ++;
    red += 0.2;
    if (score > 255 * 5)
        green += 0.2;
    if (score > 255 * 10)
        blue += 0.2;
    if (red >= 255 && green >= 255 && blue >= 255)
        reset();
    $('#score').html(score);
    $('#score').css('background-color', `rgb(${red}, ${green}, ${blue})`);
});
