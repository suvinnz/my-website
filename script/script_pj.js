$(function(){

  //floating arrow
  $(window).on('scroll', function() {
    const floatingIconDown = $('#floatingIconDown');
    const floatingIconUp = $('#floatingIconUp');
    console.log('Current scroll position:', $(window).scrollTop());

    const documentHeight = $(document).height();
    const currentScroll = $(window).scrollTop() + $(window).height();
    
    console.log('Current Scroll:', currentScroll, 'Document Height:', documentHeight);

    if (currentScroll >= documentHeight - 1) {
      floatingIconDown.hide();
      floatingIconUp.show();
    } else {
      floatingIconDown.show();
      floatingIconUp.hide();
    }
  });


})