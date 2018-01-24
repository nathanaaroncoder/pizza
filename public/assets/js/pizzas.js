// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourIt").on("click", function(event) {
      var id = $(this).data("pizzaid");
      
      console.log("ID: "+ id);
  
      var nowDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/pizzas/" + id, {
        type: "PUT",
        data: nowDevoured
      }).then(
        function() {
          console.log("changed devoured to", nowDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
  
    $(".createPizza").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newPizza = {
        pizza_name: $("#newPizza").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/pizzas", {
        type: "POST",
        data: newPizza
      }).then(
        function() {
          console.log("created new pizza");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  