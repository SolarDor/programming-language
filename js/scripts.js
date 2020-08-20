$(document).ready(function() {
  $("#program").submit(function(event) {
    const fullNameInput = $("input#fullName").val();
    const interest = $("input#interest").val();
    const career = $("select#career").val();
    const loc = $("input#loc").val();
    const salary = $("input#salary").val();
    const media = $("select#media").val();

    if(fullNameInput === "") {
      $(alert("Please Enter Your Full Name!"))
      location.reload();
    } else if (interest <= 5) {
      $(alert("You're Going To Need More Interest Than That!"))
      location.reload();
    } else if (media === "netflix") {
      $("#fullName").append(fullNameInput);
      $(".ruby").hide()
      $(".cSharp").hide();
      $(".fullStack").show()
      } else if (media === "hulu") {
      $("#fullName").append(fullNameInput);
      $(".cSharp").hide();
      $(".fullStack").hide()
      $(".ruby").show()
      } else if (media === "prime") {
      $("#fullName").append(fullNameInput);
      $(".fullStack").hide()
      $(".ruby").hide()
      $(".cSharp").show();
      }
      

    event.preventDefault()
  });
});
