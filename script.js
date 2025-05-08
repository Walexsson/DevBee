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

  

// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    
    if (newColorScheme === 'dark' && !localStorage.getItem('theme')) {
      body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (newColorScheme === 'light' && !localStorage.getItem('theme')) {
      body.classList.remove('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
});