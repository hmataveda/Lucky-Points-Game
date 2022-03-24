var boxes = [
    [9, 1, 8, 1, 9, 4, 9, 8, 9, 2],
    [3, 1, 9, 7, 9, 8, 6, 1, 8, 8],
    [5, 3, 7, 4, 9, 6, 9, 6, 10, 0],
    [2, 3, 9, 9, 4, 9, 6, 0, 9, 0],
    [6, 5, 9, 9, 5, 2, 7, 3, 1, 4],
    [9, 4, 3, 5, 9, 6, 2, 9, 3, 0],
    [1, 2, 9, 9, 5, 9, 1, 2, 9, 6],
    [2, 9, 2, 2, 9, 7, 9, 9, 1, 0],
    [5, 9, 0, 9, 0, 9, 0, 1, 1, 2]
];

var game = document.querySelector('#game');
var scoreValue = document.querySelector('#scoreValue')

function createBoxes(boxes) {
    var sqaure = '';
    for (var row = 0; row < boxes.length; row++) {
        sqaure += "<div>"
        for (var col = 0; col < boxes[row].length; col++) {
            sqaure += `<button class = "box" onclick ="sayValue(this, ${boxes[row][col]})"></button>`;
        }
        sqaure += "</div>";
    }
    game.innerHTML = sqaure;
}
createBoxes(boxes);
var count = 0;
var score = 0;

function sayValue(ele, value) {
    ele.classList.toggle("animate");

    if (value == 9) {

        setTimeout(() => {
            count++;
            ele.innerHTML = "&#10060;";
            ele.style.backgroundColor = "black";
            if (count == 3) {

                setTimeout(() => {
                    game.innerHTML = '<button class = "restart" onclick = "location.reload()">Restart!!!!</button>'

                }, 500)

            }

        }, 500)
    } else {
        score += value;
        setTimeout(() => {
            ele.innerHTML = value;
            ele.style.backgroundColor = "skyblue"
            scoreValue.innerHTML = score;
        }, 500)
    }




}