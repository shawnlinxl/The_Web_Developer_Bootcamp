// to be able to access todo outside window.setTimeout
todo = [];

window.setTimeout(
    // Delay prompt to after html page rendered
    function() {
        var action = prompt("What would you like to do?");

        while(action != "quit") {

            if (action == "new") {
                todo.push(prompt("Enter a todo item:"));
            } else if (action == "list") {
                console.log(todo);
            }

            action = prompt("What would you like to do?");

        }

        console.log("Goodbye");
    }, 500
);