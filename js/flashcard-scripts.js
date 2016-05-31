$(document).ready(function() {
  $(".word").click(function() {
    $(this).next().toggle();
  });

  $(".button").click(function() {
    $(".definition").toggle();
  });
});
