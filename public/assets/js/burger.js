//Attaching the handlers.
$(document).ready(function () {

  $(".create-burger").on("submit", function(event) {
    event.preventDefault();

    const newestBurger = {
      name: $("#burger-input").val().trim(),
      readyToEat: $("[name=readyToEat]:checked").val().trim()
    };
    console.log(newestBurger.name);

    //Sending POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newestBurger,
    }).then(
      function () {
        console.log("created new burger");
        //Reload page for updated list.
        location.reload();
      }
    );
  });

  $(".change_burger_status").on("click", function(event) {
    const id = $(this).data("id");
    const burgerStatus = $(this).data("burgerstatus");

    const newBurgerState = {
      readyToEat: burgerStatus
    };

    //Send the put request
    $ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed the burger to", burgerStatus);
        //Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
