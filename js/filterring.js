$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  $(".card")
    .mouseenter(function () {
      $(this).find(".card-overlay").css({ top: "-100%" });
      $(this).find(".card-hover").css({ top: "0" });
    })
    .mouseleave(function () {
      $(this).find(".card-overlay").css({ top: "0" });
      $(this).find(".card-hover").css({ top: "100%" });
    });
});
