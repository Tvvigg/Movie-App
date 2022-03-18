//add click event to submit button
$("#submit").on("click", function () {
  //get values from inputs
  movie = $("#title").val();
  rating = $("#rating").val();
  if (rating > 10) {
    alert("You entered a value more than 10! Set rating to 10 for you!");
    rating = 10;
  }
  //add movie to a list
  $("ol").append(`<li>I rate ${movie} at ${rating} out of 10!</li>`);
  //add button at end of list element
  $("li").last().append("<button>Remove</button>");
  //add click listener to remove parent li
  $("button").on("click", function () {
    $(this).parent().remove();
  });
});
