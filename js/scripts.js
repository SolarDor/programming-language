$(document).ready(function() {
  $("#program").submit(function(event) {
    const fullName = $("input#fullName").val();
    const interest = $("input#interest").val();
    const career = $("select#career").val();
    const location = $("input#location").val();
    const salary = $("input#salary").val();
    const media = $("select#media").val();

    if(fullName === "") {
      $(alert("Please Enter Your Full Name!"))
      location.reload();
    } else if (interest === interest < 5) {
      $(alert("You're Going To Need More Interest Than That!"))
      location.reload();
    } else if (media === "netflix") {
      $("#fullName").append(fullName);
      $("#fullStack").show()
      } else if (media === "hulu") {
      $("#fullName").append(fullName);
      $("#ruby").show()
      } else if (media === "prime") {
      $("#fullName").append(fullName);
      $("#cSharp").show();
      }

    event.preventDefault()
  });
});
