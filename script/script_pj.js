$(function(){

  //floating arrow
  $(window).on('scroll', function() {
    const floatingIcon = $('#floatingIcon');
    console.log('Current scroll position:', $(window).scrollTop());

    const documentHeight = $(document).height();
    const currentScroll = $(window).scrollTop() + $(window).height();
    
    console.log('Current Scroll:', currentScroll, 'Document Height:', documentHeight);

    if (currentScroll >= documentHeight - 1) {
        floatingIcon.attr('src', '../image/up.svg');
    } else {
        floatingIcon.attr('src', '../image/down.svg');
    }
  });


})