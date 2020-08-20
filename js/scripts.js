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
    const radioInput = $("input#radio").val();

    $("#formFour").show();
    $("#formThree").hide();

    event.preventDefault();
  });

  $("#formFour").submit(function(event) {
    const locationInput = $("input#location").val();
  
    $("#formFive").show();
    $("#formFour").hide();

    event.preventDefault();
  });

  $("#formFive").submit(function(event) {
    const salaryInput = $("input#salary").val();

    $("#formSix").show();
    $("#formFive").hide();

    event.preventDefault();
  });
  
  $("form#program").submit(function(event) {
    const mediaInput = $("input#media").val();

    if (media === "netflix") {
      $("#cSharp").hide()
      $("#ruby").hide()
      $("#fullStack").show()
      } else if (media === "hulu") {
      $("#cSharp").hide()
      $("#fullStack").hide()
      $("#ruby").show()
      } else if (media === "prime") {
      $("#ruby").hide()
      $("#fullStack").hide()
      $("#cSharp").show();
      }

    event.preventDefault()
  });
});
