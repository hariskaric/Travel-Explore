jQuery("#contactForm").on("submit", function (event) {
  if (event.isDefaultPrevented()) {
    formError();
  } else {
    event.preventDefault();
    submitForm();
  }
});

function submitForm() {
  let fname = jQuery("#fname").val();
  let lname = jQuery("#lname").val();
  let email = jQuery("#email").val();
  let message = jQuery("#message").val();

  jQuery.ajax({
    type: "POST",
    url: "mail/php/form-process.php",
    data: "fname=" + fname + "&lname" + lname + "&email=" + email + "&message" + message,
    sucess: function (text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    },
  });
}
function formSuccess() {
  jQuery("#contactForm")[0].reset();
  submitMSG(true, "You mail has been sent successfully!");
}
