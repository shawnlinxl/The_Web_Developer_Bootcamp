var button_color = document.querySelector("#change_color");
var button_purple = document.querySelector("#toggle_purple");

button_color.addEventListener("click", set_background_color);

button_purple.addEventListener("click", toggle_class_purple);

function set_background_color() {
    var body_element = document.body;
    if (body_element.style.backgroundColor != "white") {
        body_element.style.backgroundColor = "white";
    } else {
        body_element.style.backgroundColor = rand_color();
    }
}

function rand_color() {
    return("#"+((1<<24)*Math.random()|0).toString(16));
}

function toggle_class_purple() {
    document.body.classList.toggle("purple");
}