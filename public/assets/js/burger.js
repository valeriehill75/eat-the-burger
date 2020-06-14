//Attaching the handlers.
$(function() {
    $(".burgerAdd").on("click", function(event) {
        const id = $(this).data("id");
        const newBurger = $(this).data("newburger");

        const newBurgerList = {
            readyToEat: newBurger
        };

        //Sending PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerList
        }).then(
            function() {
                console.log("Added new burger to", newBurger);
                //Reload to get uploaded list.
                location.reload();
            }
        );
    });

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        const newestBurger = {
            name: $("#burger-input").val().trim()
        };

        //Sending POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newestBurger
        }).then(
            function() {
                console.log("created new burger");
                //Reload page for updated list.
                location.reload();
            }
        );

    });

    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");

        //Send delete request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                //Reload page for updated list.
                location.reload();
            }
        );
    });
});