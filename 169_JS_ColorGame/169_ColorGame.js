var easy_hard_color = 6;
var colors = generate_colors(easy_hard_color);

var color_picked = pick_color(); 

var squares = document.querySelectorAll(".square");

var color_display = document.querySelector("#color_display");
color_display.textContent = color_picked;

var h1 = document.querySelector("h1");

var message = document.querySelector("#message");

var reset_button = document.querySelector("#reset");
var easy_button = document.querySelector("#easy");
var hard_button = document.querySelector("#hard");

easy_button.addEventListener("click", function() {
    easy_button.classList.add("selected");
    hard_button.classList.remove("selected");
    easy_hard_color = 3;
    reset_all(easy_hard_color);
    for (var i = 3; i < 6; i++) {
        squares[i].style.display = "none";
    }
});

hard_button.addEventListener("click", function() {
    easy_button.classList.remove("selected");
    hard_button.classList.add("selected");
    easy_hard_color = 6;
    reset_all(easy_hard_color);
    for (var i = 3; i < 6; i++) {
        squares[i].style.display = "block";
    }
});

reset_button.addEventListener("click", function(){
    reset_all(easy_hard_color);
});

for (var i = 0; i < squares.length; i++) {
    // add initiao colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var color_selected = this.style.backgroundColor;
        // compare color to picked color
        if (color_selected === color_picked) {
           message.textContent = "Correct!";
           change_colors(color_picked);
           h1.style.backgroundColor = color_picked;
           reset_button.textContent = "Play again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

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
    var red = rand_int(0,255);
    var green = rand_int(0,255);
    var blue = rand_int(0,255);
    return "rgb(" + red  + ", " + green + ", " +  blue + ")";
}

function generate_colors(num_colors) {
    var colors = [];

    for (var i = 0; i < num_colors; i++) {
        colors.push(rand_rgb());
    }

    return colors;
}

function reset_all(num_colors) {
    colors = generate_colors(num_colors);
    color_picked = pick_color();
    color_display.textContent = color_picked;
    for (var i = 0; i < squares.length; i++) {
        // add initiao colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    reset_button.textContent = "New Colors";
    message.textContent = "";
}