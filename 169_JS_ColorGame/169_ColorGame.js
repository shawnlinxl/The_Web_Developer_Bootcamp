var easy_hard_color = 6;
var colors = [];
var color_picked;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var color_display = document.querySelector("#color_display");
var message = document.querySelector("#message");
var reset_button = document.querySelector("#reset");
var mode_button = document.querySelectorAll(".mode");

init();

function init() {
    setup_mode_buttons();
    setup_squares();
    reset_all();
}

reset_button.addEventListener("click", function(){
    reset_all(easy_hard_color);
});

function change_colors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pick_color() {
    // pick a random number
    return colors[rand_int(0, colors.length - 1)];
}

function rand_rgb() {
    var red = rand_int(0, 255);
    var green = rand_int(0, 255);
    var blue = rand_int(0, 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generate_colors(num_colors) {
    var colors = [];

    for (var i = 0; i < num_colors; i++) {
        colors.push(rand_rgb());
    }

    return colors;
}

function reset_all() {
    colors = generate_colors(easy_hard_color);
    color_picked = pick_color();
    color_display.textContent = color_picked;
    for (var i = 0; i < squares.length; i++) {
        // add initiao colors to squares
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#1c6690";
    reset_button.textContent = "New Colors";
    message.textContent = "";
}

function setup_mode_buttons() {
    // mode buttons event listeners
    for (var i = 0; i < mode_button.length; i++) {
        mode_button[i].addEventListener("click", function () {
            for (j = 0; j < mode_button.length; j++) {
                mode_button[j].classList.remove("selected");
            }
            this.classList.add("selected");
            easy_hard_color = (this.textContent === "Easy" ? 3 : 6);

            reset_all(easy_hard_color);
        });
    }
}

function setup_squares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var color_selected = this.style.backgroundColor;
            // compare color to picked color
            if (color_selected === color_picked) {
                message.textContent = "Correct!";
                change_colors(color_picked);
                h1.style.backgroundColor = color_picked;
                reset_button.textContent = "Play again?";
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}