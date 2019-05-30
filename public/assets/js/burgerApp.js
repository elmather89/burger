$(function () {

    // change burger state on click
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newstate");

        var newDevourState = { devoured: newDevour };

        // PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("changed state to", newDevour);
            location.reload();
        });
    });

    $("#new-burger").on("click", function (event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#add-burger").val().trim(),
            devoured: 0
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(function() {
            console.log("new burger added");
            location.reload();
        });
    });

});