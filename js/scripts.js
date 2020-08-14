$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const fullNameInput = $("input#fullName").val();

    $(".fullName").append(fullNameInput);
    $("#formTwo").show();
    $("#formOne").hide();

    event.preventDefault();
  });

  $(select#).change(function(event) {
    const
  });

  $("select#media").change(function(event) {
    const media = $("select#media").val();

    if (interest === "netflix") {
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
