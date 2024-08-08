$(function(){

    
    /*
    $("#wrap .contents .content").mouseover(function(){
        $(".viewbtn").show();
    });
    $("#wrap .contents .content").mouseout(function(){
        $(".viewbtn").hide();
    });
    */

    /*
    const cursorRounded = document.querySelector('.cursor-out');
    const cursorPointed = document.querySelector('.cursor-in');

    const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

    window.addEventListener('mousemove', moveCursor);
    */

    /*
    const cursorRounded = document.querySelector('.cursor-out');
    const cursorPointed = document.querySelector('.cursor-in');
  
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      cursorRounded.style.left = `${mouseX}px`;
      cursorRounded.style.top = `${mouseY}px`;
      cursorPointed.style.left = `${mouseX}px`;
      cursorPointed.style.top = `${mouseY}px`;
    }
  
    window.addEventListener('mousemove', moveCursor);
    */
    const cursorRounded = document.querySelector('.cursor-out');
    const cursorPointed = document.querySelector('.cursor-in');
  
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      cursorRounded.style.left = `${mouseX}px`;
      cursorRounded.style.top = `${mouseY}px`;
      cursorPointed.style.left = `${mouseX}px`;
      cursorPointed.style.top = `${mouseY}px`;
    }
  
    const enlargeCursor = () => {
        cursorRounded.classList.add('enlarged');
        cursorPointed.classList.add('enlarged', 'hide');
      }
    
      const shrinkCursor = () => {
        cursorRounded.classList.remove('enlarged');
        cursorPointed.classList.remove('enlarged', 'hide');
      }
    
      window.addEventListener('mousemove', moveCursor);
    
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseover', enlargeCursor);
        el.addEventListener('mouseout', shrinkCursor);
      });


})