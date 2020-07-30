//Attaching the handlers.
$(function () {
  $(".change_burger_status").on("click", (event) => {
    const id = event.currentTarget.attributes[1].nodeValue;

    const newBurgerState = {
      devoured: true,
    };

    //Send the put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(() => {
        //Reload the page to get the updated list
        location.reload();
    });
  });

  $(".create-burger").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger-input").val().trim(),
    };
    console.log(newBurger.burger_name);

    //Sending POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
        console.log("created new burger");
        //Reload page for updated list.
        location.reload();
      }
    );
  });
});
