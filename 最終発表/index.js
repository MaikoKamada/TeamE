
$(function(){
  /*初期表示*/
  $('.ChangeElem_Panel').hide();
  $('.ChangeElem_Panel').eq(0).show();
  $('.nav-link').eq(0).addClass('is-active');

  /*クリックイベント*/
  $('.nav-link').each(function () {
    $(this).on('click', function () {
      var index = $('.nav-link').index(this);
      $('.nav-link').removeClass('is-active');
      $(this).addClass('is-active');
      $('.ChangeElem_Panel').hide();
      $('.ChangeElem_Panel').eq(index).show();
    });
  });
});
