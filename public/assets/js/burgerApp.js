$(function () {

    // change burger state on click
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newstate");

        var newDevourState = { devoured: 1 };

        // PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("changed state to", newDevour);
            location.reload();
        });
    });

    // add new burger
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

    // delete burger
    $(".delete-burger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" +id
        }).then(function() {
            location.reload();
        });
    });

});