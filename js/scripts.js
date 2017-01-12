$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();
    var question3 = $("input#question3").val();

    if (question1 === true && question2 === true && question3 === false && question4 ===false) {
      $("democrat.").show();
    }
    else if (question1 === false && question2 === false && question3 === true && question4 ===true) {
      $("republican.").show();
    }
    else if (question1 === true && question2 === false && question3 === false && question4 === true) {
      $("neither.").show();
    }
    event.preventDefault();
  });
});
