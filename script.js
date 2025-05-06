function showSidebar() {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.display = "flex";
  }
  
  function hideSidebar() {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.display = "none";

     // Prevent the default anchor behavior
  return false;
  }

   
  
  // * Testimonials slider initialization
 document.addEventListener('DOMContentLoaded', function() {
   new Swiper('.testimonials-slider', {
     speed: 600,
     loop: true,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false
     },
     slidesPerView: 'auto',
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true
     },
     breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween: 20
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 20
       },
       1200: {
         slidesPerView: 3,
         spaceBetween: 20
       }
     }
   });
 });

  