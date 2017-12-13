$(document).ready(function() {
  $('.menu-items').on('click', function(e){
    e.preventDefault();
    let link = $(this).text();
    let coords = (link != 'contacts') ? $(`.${link}`).offset().top : document.body.clientHeight - window.innerHeight;    
    $('html, body').animate({      
        scrollTop: coords      
    }, 500);
    if(!$(this).hasClass('active')) {
      $('.menu-items').removeClass('active');
      $(this).addClass('active');
    }
  });  
  let about = document.getElementById('about');
  let portfolio = document.getElementById('portfolio');
  let contact = document.getElementById('contact');
  
  $(window).scroll(function(){    
    if(about.getBoundingClientRect().top == 50 || (about.getBoundingClientRect().top < 50 && portfolio.getBoundingClientRect().top > 72)) {
      $('.menu-items').removeClass('active');
      $("a[href='#about']").parent().addClass('active');
    }
    if(portfolio.getBoundingClientRect().top == 72 || (portfolio.getBoundingClientRect().top < 72 && contact.getBoundingClientRect().top > 450)) {
      $('.menu-items').removeClass('active');
      $("a[href='#portfolio']").parent().addClass('active');
    }
    if(contact.getBoundingClientRect().top < 450) {
      $('.menu-items').removeClass('active');
      $("a[href='#contact']").parent().addClass('active');
    }
  });
  
});
