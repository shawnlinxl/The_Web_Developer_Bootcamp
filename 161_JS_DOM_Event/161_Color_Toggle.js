var button_purple = document.querySelector("#toggle_purple");

button_purple.addEventListener("click", toggle_class_purple);

function toggle_class_purple() {
    document.body.classList.toggle("purple");
}