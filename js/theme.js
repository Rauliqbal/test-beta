// $(".theme a").click(function () {
//   $(this).find("i").toggleClass("far fa-moon far-fa-sun");
// });
$(document).ready(function () {
  $("#selector").change(function () {
    $("body").toggleClass("bg-secondary");
    $("nav").toggleClass("navbar-dark bg-dark");
    $("h1").toggleClass("text-white");
  });
});
