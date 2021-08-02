$(function () {
  var i = 0;
  var lock = true;
  $('.catalogue__button').on('click', function animationCatalogue() {
    $('.catalogue__button').toggleClass('catalogue__button--active');
    $(this).attr('disabled', true);
    if (lock == true){
      var classTimer = setInterval(activeClass, 50);
      setTimeout(() => { 
        clearInterval(classTimer);
        i = 11;
        lock = false;
        $(this).attr('disabled', false);
      }, 601);
    } else{
      var classTimer = setInterval(deactiveClass, 50);
      setTimeout(() => { 
        clearInterval(classTimer);
        i = 0; lock = true;
        $(this).attr('disabled', false);
      }, 601);
    }
  })

  function activeClass() {
    $('.catalogue__item').eq(i).removeClass('catalogue__item--deactive');
    $('.catalogue__item').eq(i).addClass('catalogue__item--active');
    i++;
  }

  function deactiveClass() {
    $('.catalogue__item').eq(i).removeClass('catalogue__item--active');
    $('.catalogue__item').eq(i).addClass('catalogue__item--deactive');
    i--;
  }
});