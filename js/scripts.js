$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const fullNameInput = $("input#fullName").val();

    $(".fullName").append(fullNameInput);
    $("#formTwo").show();
    $("#formOne").hide();

    event.preventDefault();
  });

  $("#formTwo").submit(function(event) {
    const interestInput = $("input#interest").val();

    $("#formThree").show();
    $("#formTwo").hide();

    event.preventDefault();
  });

  $("#formThree").submit(function(event) {
    const interestInput = $("input#interest").val();

    $("#formFour").show();
    $("#formThree").hide();

    event.preventDefault();
  });

  $("#formFour").submit(function(event) {
    const interestInput = $("input#interest").val();

    $("#formFive").show();
    $("#formFour").hide();

    event.preventDefault();
  });

  $("#formFive").submit(function(event) {
    const interestInput = $("input#interest").val();

    $("#formSix").show();
    $("#formSix").hide();

    event.preventDefault();
  });

  $("select#media").change(function(event) {
    const media = $("select#media").val();

    if (media === "netflix") {
      $("#cSharp").hide()
      $("#ruby").hide()
      $("#fullStack").show()
      } else if (interest === "hulu") {
      $("#cSharp").hide()
      $("#fullStack").hide()
      $("#ruby").show()
      } else if (interest === "prime") {
      $("#ruby").hide()
      $("#fullStack").hide()
      $("#cSharp").show();
      }

    event.preventDefault()
  });

  $("form#language").submit(function(event) {
    const netflix = parseInt($("input#netflix").val())
    const hulu = parseInt($("input#hulu").val());
    const prime = parseInt($("input#prime").val());
    const interest = $("select#interest").val();

      if (interest === "love" && love > 5){
      $("#fullStack").show();
      } else if (interest ==="hate" && hate > 5){
      $("#ruby").show();
      } else if (interest === "hate" || interest === "love"){
      $("#cSharp").show();
      }

      if (!interest || !love && !hate){
      alert('Please complete the questionnaire fully for an assessment.');
    }

    event.preventDefault();
  });
});
