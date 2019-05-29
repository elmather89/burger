$(function() {

    $("#new-burger").on("click", function(event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#add-burger").val().trim(),
            devoured: false
        }
    });

    
});