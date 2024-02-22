$(document).ready(function() {
  // Click on an image, get a message

  $("#dogeOne").click(function() {
    $("#outputDiv").hide();

    console.log("User clicked dogeOne");
    $("#outputMsg").text("You Lose, you Stupid Loser");
    $("#outputDiv").toggle().fadeIn(5000);
  });

  $("#dogeTwo").click(function() {
    $("#outputDiv").hide();
    console.log("User clicked dogeTwo");
    $("#outputMsg").text("You has WOW");
    $("#outputDiv").toggle();
  });
});
