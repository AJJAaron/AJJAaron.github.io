function getPack (version, packID) {
  var p, t, v, pStr, tStr, vStr;
  pStr = packID.toString();
  $('.version-title').html(version.versionTitle);
  $('.pack-title').html(version.packs[packID].title);

  $('.header').css("background-color",version.packs[packID].bgColor);
  $('a.home').css("color",version.packs[packID].Color);
  $('.theme-header').css("background-color",version.packs[packID].bgColor);
  $('.theme-header').css("color",version.packs[packID].Color);
  $('.number').css("color",version.packs[packID].bgColor);
  for (p = 0; p < 5; p++) {
    pStr = p.toString();
    if (p == packID) {
      $('#pack-link'+pStr).css("background-color",version.packs[packID].bgColor);
      $('#pack-link'+pStr).css("color",version.packs[packID].Color);
    } else {
      $('#pack-link'+pStr).css("background-color","rgb(50,50,50)");
      $('#pack-link'+pStr).css("color","White");
    }
  }
  for (t = 0; t < 6; t++) {
    for (v = 0; v < 2; v++) {
      tStr = t.toString();
      vStr = v.toString();
      $('#t'+tStr).html(version.packs[packID].theme[t].title);
      $('#v'+tStr+vStr+'_ref_top').html(version.packs[packID].theme[t].verse[v].ref);
      $('#v'+tStr+vStr+'_txt').html(version.packs[packID].theme[t].verse[v].txt);
      $('#v'+tStr+vStr+'_ref_end').html(version.packs[packID].theme[t].verse[v].ref);
    }
  }
}

function versionCheck(versionID, packID) {
  var vStr = versionID.toString();
  $('#check'+vStr).removeClass("hidden-icon");
  for (v = 0; v < 6; v++) {
    if (v != versionID) {
      vStr = v.toString();
      $('#check'+vStr).addClass("hidden-icon");
    }
  }
  getPack(versionArray[versionID], packID);
}

var versionArray = [esv, kjv, niv11, niv84, rsv, cnv];
var currVersion = 2;
var currPack = 0;
if (window.matchMedia("(orientation: portrait) and (min-width: 600px), (orientation: landscape) and (min-height: 600px)").matches) {
  var sideNavWidth = "15rem";
  var packNavHeight = "4rem";
  var versionNavHeight = "16rem";
} else {
  var sideNavWidth = "10rem";
  var packNavHeight = "3rem";
  var versionNavHeight = "12rem";
}
getPack (versionArray[currVersion], currPack);
versionCheck(currVersion, currPack)

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

  $('.pack-title').on('click', () => {
    $('.sideNav').css("width","0");
    $('.versionNav').css("height","0");
    if ($('.packNav').css("height") == "0px") {
      $('.packNav').css("height",packNavHeight);
    } else if ($('.packNav').css("height") > "0") {
      $('.packNav').css("height","0");
    }
  });

  $('.version-title').on('click', () => {
    $('.sideNav').css("width","0");
    $('.packNav').css("height","0");
    if ($('.versionNav').css("height") == "0px") {
      $('.versionNav').css("height",versionNavHeight);
    } else if ($('.versionNav').css("height") > "0") {
      $('.versionNav').css("height","0");
    }
  });

  $('.pack').on('click', () => {
    $('.sideNav').css("width","0");
    $('.packNav').css("height","0");
    $('.versionNav').css("height","0");
  });

  $('#version-link0').on('click', () => {
    versionCheck(0, currPack);
    currVersion = 0;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[0].versionTitle);
  });
  $('#version-link1').on('click', () => {
    versionCheck(1, currPack);
    currVersion = 1;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[1].versionTitle);
  });
  $('#version-link2').on('click', () => {
    versionCheck(2, currPack);
    currVersion = 2;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[2].versionTitle);
  });
  $('#version-link3').on('click', () => {
    versionCheck(3, currPack);
    currVersion = 3;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[3].versionTitle);
  });
  $('#version-link4').on('click', () => {
    versionCheck(4, currPack);
    currVersion = 4;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[4].versionTitle);
  });
  $('#version-link5').on('click', () => {
    versionCheck(5, currPack);
    currVersion = 5;
    $('.versionNav').css("height","0");
    ga('send', 'event', 'Version', 'Select', versionArray[5].versionTitle);
  });

  $('#pack-link0').on('click', () => {
    getPack (versionArray[currVersion], 0);
    currPack = 0;
    $('.packNav').css("height","0");
    ga('send', 'event', 'Pack', 'Select', 'A');
  });
  $('#pack-link1').on('click', () => {
    getPack (versionArray[currVersion], 1);
    currPack = 1;
    $('.packNav').css("height","0");
    ga('send', 'event', 'Pack', 'Select', 'B');
  });
  $('#pack-link2').on('click', () => {
    getPack (versionArray[currVersion], 2);
    currPack = 2;
    $('.packNav').css("height","0");
    ga('send', 'event', 'Pack', 'Select', 'C');
  });
  $('#pack-link3').on('click', () => {
    getPack (versionArray[currVersion], 3);
    currPack = 3;
    $('.packNav').css("height","0");
    ga('send', 'event', 'Pack', 'Select', 'D');
  });
  $('#pack-link4').on('click', () => {
    getPack (versionArray[currVersion], 4);
    currPack = 4;
    $('.packNav').css("height","0");
    ga('send', 'event', 'Pack', 'Select', 'E');
  });
});
