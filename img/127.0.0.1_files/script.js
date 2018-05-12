function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#invalid-email-message");
  var email = $("#email-input").val();

  if (!validateEmail(email)) {
    $result.text(email + " is not valid :(");
    $result.css({"color": "#C23628", "display": "inline"});
  }
  return false;
}

// $("#validate").bind("click", validate);
