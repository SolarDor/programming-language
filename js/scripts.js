$(document).ready(function() {
  $("#program").submit(function(event) {
    const fullNameInput = $("input#fullName").val();
    const interestInput = $("input#interest").val();
    const radioInput = $("input#radio").val();
    const locationInput = $("input#location").val();
    const salaryInput = $("input#salary").val();
    const mediaInput = $("input#media").val();

    $(".fullName").append(fullNameInput);

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
