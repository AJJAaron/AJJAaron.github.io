$(document).ready(() => {
  $('#expand_more').on('click', () => {
    $('.nav-container').slideDown();
    $('#expand_more').addClass("hidden");
    $('#expand_less').removeClass("hidden");
  });
  $('#expand_less').on('click', () => {
    $('.nav-container').slideUp();
    $('#expand_less').addClass("hidden");
    $('#expand_more').removeClass("hidden");
  });
  $('.nav-container').on('mouseleave', () => {
    $('.nav-container').slideUp();
    $('#expand_less').addClass("hidden");
    $('#expand_more').removeClass("hidden");
  });

  $('.packA-link').on('click', () => {
    $('.nav-container').slideUp();
    $('#expand_less').addClass("hidden");
    $('#expand_more').removeClass("hidden");
    $('.packB').hide();
    $('.packA').show();
    $('.pack-title').html("Pack A - Live the New Life");
    $('.header').css("background-color","Gold");
    $('.home').css("color","Black");
    $('.theme-header').css("background-color","Gold");
    $('.theme-header').css("color","Black");
    $('.number').css("color","Gold");
  });
  $('.packB-link').on('click', () => {
    $('.nav-container').slideUp();
    $('#expand_less').addClass("hidden");
    $('#expand_more').removeClass("hidden");
    $('.packA').hide();
    $('.packB').show();
    $('.pack-title').html("Pack B - Proclaim Christ");
    $('.header').css("background-color","Crimson");
    $('.home').css("color","White");
    $('.theme-header').css("background-color","Crimson");
    $('.theme-header').css("color","White");
    $('.number').css("color","Crimson");
  });
});
