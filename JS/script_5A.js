function getPack (version) {
  var t, tStr;
  $('.version-title').html(version.versionTitle);

  $('.header').css("background-color",version.bgColor);
  $('a.home').css("color",version.Color);
  $('.theme-header').css("background-color",version.bgColor);
  $('.theme-header').css("color",version.Color);
  $('.number').css("color",version.bgColor);
  for (t = 0; t < 5; t++) {
    tStr = t.toString();
    $('#t'+tStr).html(version.themes[t].title);
    $('#v'+tStr+'0_ref_top').html(version.themes[t].verse.ref);
    $('#v'+tStr+'0_txt').html(version.themes[t].verse.txt);
    $('#v'+tStr+'0_ref_end').html(version.themes[t].verse.ref);
  }
}

function versionCheck(versionID) {
  var vStr = versionID.toString();
  $('#check'+vStr).removeClass("hidden-icon");
  for (v = 0; v < 5; v++) {
    if (v != versionID) {
      vStr = v.toString();
      $('#check'+vStr).addClass("hidden-icon");
    }
  }
  getPack(versionArray[versionID]);
}

var versionArray = [esv, kjv, niv11, niv84, rsv];
var currVersion = 2;
if (window.matchMedia("(orientation: portrait) and (min-width: 600px), (orientation: landscape) and (min-height: 600px)").matches) {
  var sideNavWidth = "15rem";
  var versionNavHeight = "16rem";
} else {
  var sideNavWidth = "10rem";
  var versionNavHeight = "10rem";
}
getPack (versionArray[currVersion]);
versionCheck(currVersion)

$(document).ready(() => {
  $('#menu-icon').on('click', () => {
    $('.versionNav').css("height","0");
    if ($('.sideNav').css("width") == "0px") {
      $('.sideNav').css("width",sideNavWidth);
    } else if ($('.sideNav').css("width") > "0") {
      $('.sideNav').css("width","0");
    }
  });

  $('.version-title').on('click', () => {
    $('.sideNav').css("width","0");
    if ($('.versionNav').css("height") == "0px") {
      $('.versionNav').css("height",versionNavHeight);
    } else if ($('.versionNav').css("height") > "0") {
      $('.versionNav').css("height","0");
    }
  });

  $('.pack').on('click', () => {
    $('.sideNav').css("width","0");
    $('.versionNav').css("height","0");
  });

  $('#version-link0').on('click', () => {
    versionCheck(0);
    currVersion = 0;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[0].versionTitle);
  });
  $('#version-link1').on('click', () => {
    versionCheck(1);
    currVersion = 1;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[1].versionTitle);
  });
  $('#version-link2').on('click', () => {
    versionCheck(2);
    currVersion = 2;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[2].versionTitle);
  });
  $('#version-link3').on('click', () => {
    versionCheck(3);
    currVersion = 3;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[3].versionTitle);
  });
  $('#version-link4').on('click', () => {
    versionCheck(4);
    currVersion = 4;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[4].versionTitle);
  });
});
