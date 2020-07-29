//Attaching the handlers.
$(document).ready(function () {


  $(".create-burger").on("submit", function (event) {
    event.preventDefault();

    const newestBurger = {
      name: $("#burger-input").val().trim(),
    };
    console.log(newestBurger.name);

    //Sending POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newestBurger,
    }).then(function () {
      console.log("created new burger");
      //Reload page for updated list.
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    //Send delete request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      //Reload page for updated list.
      location.reload();
    });
  });
});
