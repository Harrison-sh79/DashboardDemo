import $ from "./lib/jquery-2.2.4.min.js"

$(".popout .btn").click(function () {
    console.log("active")
    $(this).toggleClass("active");
    $(this).closest(".popout").find(".panel").toggleClass("active");
  });
  $(document).click(function () {
    $(".popout .panel").removeClass("active");
    $(".popout .btn").removeClass("active");
  });
  $(".popout .panel").click(function (event) {
    event.stopPropagation();
  });
  $(".popout .btn").click(function (event) {
    event.stopPropagation();
  });
  