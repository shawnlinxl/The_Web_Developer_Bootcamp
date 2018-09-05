// to be able to access todo outside window.setTimeout
todo = [];

window.setTimeout(
    // Delay prompt to after html page rendered
    function() {
        var action = prompt("What would you like to do?");

        while(action != "quit") {

            if (action == "new") {
                add_todo();
            } else if (action == "list") {
                list_todo();
            } else if (action == "delete") {
                delete_todo();
            }

            action = prompt("What would you like to do?");
        }

        console.log("Goodbye");

    }, 500
);

function add_todo() {
    todo.push(prompt("Enter a todo item:"));
    console.log("Added todo");
}

function list_todo() {
    console.log("*****************************");
    todo.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("*****************************");
}

function delete_todo(){
    var index_delete = prompt("Enter the index of the todo you'd like to delete:");
    todo.splice(index_delete, 1);
    console.log("Deleted todo");
}