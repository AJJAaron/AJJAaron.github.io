function getPack (version, packID) {
  var t, v, pStr, tStr, vStr;
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
      $('#pack-link'+pStr).css("border","1px Solid White");
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
  for (v = 0; v < 4; v++) {
    if (v != versionID) {
      vStr = v.toString();
      $('#check'+vStr).addClass("hidden-icon");
    }
  }
  getPack(versionArray[versionID], packID);
}

var versionArray = [esv, niv, rsv, cnv];
var currVersion = 1;
var currPack = 0;
getPack (versionArray[currVersion], currPack);
versionCheck(currVersion, currPack)

$(document).ready(() => {
  $('#menu-icon').on('click', () => {
    $('.packNav').css("height","0px");
    $('.versionNav').css("height","0px");
    if ($('.sideNav').css("width") == "0px") {
      $('.sideNav').css("width","200px");
    } else if ($('.sideNav').css("width") == "200px") {
      $('.sideNav').css("width","0px");
    }
  });
  $('#menu-close-icon').on('click', () => {
    $('.sideNav').css("width","0px");
  });

  $('.pack-title').on('click', () => {
    $('.sideNav').css("width","0px");
    $('.versionNav').css("height","0px");
    if ($('.packNav').css("height") == "0px") {
      $('.packNav').css("height","80px");
    } else if ($('.packNav').css("height") == "80px") {
      $('.packNav').css("height","0px");
    }
  });
  $('#pack-close-icon').on('click', () => {
    $('.packNav').css("height","0px");
  });

  $('.version-title').on('click', () => {
    $('.sideNav').css("width","0px");
    $('.packNav').css("height","0px");
    if ($('.versionNav').css("height") == "0px") {
      $('.versionNav').css("height","200px");
    } else if ($('.versionNav').css("height") == "200px") {
      $('.versionNav').css("height","0px");
    }
  });

  $('.pop-up-container').on('click', () => {
    $('.sideNav').css("width","0px");
    $('.packNav').css("height","0px");
    $('.versionNav').css("height","0px");
  });

  $('#version-link0').on('click', () => {
    versionCheck(0, currPack);
    currVersion = 0;
  });
  $('#version-link1').on('click', () => {
    versionCheck(1, currPack);
    currVersion = 1;
  });
  $('#version-link2').on('click', () => {
    versionCheck(2, currPack);
    currVersion = 2;
  });
  $('#version-link3').on('click', () => {
    versionCheck(3, currPack);
    currVersion = 3;
  });

  $('#pack-link0').on('click', () => {
    getPack (versionArray[currVersion], 0);
    currPack = 0;
    $('.packNav').css("height","0px");
  });
  $('#pack-link1').on('click', () => {
    getPack (versionArray[currVersion], 1);
    currPack = 1;
    $('.packNav').css("height","0px");
  });
  $('#pack-link2').on('click', () => {
    getPack (versionArray[currVersion], 2);
    currPack = 2;
    $('.packNav').css("height","0px");
  });
  $('#pack-link3').on('click', () => {
    getPack (versionArray[currVersion], 3);
    currPack = 3;
    $('.packNav').css("height","0px");
  });
  $('#pack-link4').on('click', () => {
    getPack (versionArray[currVersion], 4);
    currPack = 4;
    $('.packNav').css("height","0px");
  });
});
