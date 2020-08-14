$(document).ready(function() {

  $("select#interest").change(function(event) {
    const interest = $("select#interest").val();

    if (interest === "netflix"){
      $("#hulu-scale").hide()
      $("#prime-scale").hide()
      $("#netflix-scale").show()
      } else if (interest === "hulu") {
      $("#netflix-scale").hide()
      $("#prime-scale").hide()
      $("#hulu-scale").show()
      } else {
      $("netflix-scale").hide()
      $("#hulu-scale").hide()
      $("#prime-scale").show();
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
