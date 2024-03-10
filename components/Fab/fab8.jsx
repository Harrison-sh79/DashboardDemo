import $ from "./lib/jquery.min.js";

if (typeof document !== 'undefined') {
$(document).ready(function() {
    $(".share-btn").click(function(){
      $(".share-btn").toggleClass("active")
      $("ul").toggleClass("active")
     })
  })
}