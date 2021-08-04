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
      }, 601);
      setTimeout(() => {
        $(this).attr('disabled', false);
      }, 901);
    } else{
      var classTimer = setInterval(deactiveClass, 50);
      setTimeout(() => { 
        clearInterval(classTimer);
        i = 0; lock = true;
      }, 601);
      setTimeout(() => {
        $(this).attr('disabled', false);
      }, 901);
    }
  })

  function activeClass() {
    var item = $('.catalogue__item').eq(i);
    item.removeClass('catalogue__item--deactive');
    item.addClass('catalogue__item--active');
    item.css('display', 'block');
    i++;
  }

  function deactiveClass() {
    var item = $('.catalogue__item').eq(i);
    item.removeClass('catalogue__item--active');
    item.addClass('catalogue__item--deactive');
    setTimeout(() => {
      item.css('display', 'none');
    }, 301);
    i--;
  }

  $('.slider').slick({
    
  });
});