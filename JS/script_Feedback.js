if (window.matchMedia("(orientation: portrait) and (min-width: 600px), (orientation: landscape) and (min-height: 600px)").matches) {
  var sideNavWidth = "15rem";
} else {
  var sideNavWidth = "10rem";
}

$(document).ready(() => {
  $('#menu-icon').on('click', () => {
    $('.packNav').css("height","0");
    $('.versionNav').css("height","0");
    if ($('.sideNav').css("width") == "0px") {
      $('.sideNav').css("width",sideNavWidth);
    } else if ($('.sideNav').css("width") > "0") {
      $('.sideNav').css("width","0");
    }
  });

  $('.pack').on('click', () => {
    $('.sideNav').css("width","0");
  });
});
