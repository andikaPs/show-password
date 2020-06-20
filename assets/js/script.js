$(document).ready(function () {

  $(".form-check").click(function () {
    if ($(this).is(":checked")) {
      $("#password").attr("type", "text");
      $("#icon").removeClass("fa-eye");
      $("#icon").addClass("fa-eye-slash");
    } else {
      $("#icon").removeClass("fa-eye-slash");
      $("#icon").addClass("fa-eye");
      $("#password").attr("type", "password");
    }
  });

});