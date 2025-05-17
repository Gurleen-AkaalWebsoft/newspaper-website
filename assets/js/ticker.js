document.addEventListener('DOMContentLoaded', function() {
 
  
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }
  
  // Add active class to current nav item
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  
  menuItems.forEach(item => {
    if (item.href === currentLocation) {
      item.classList.add('active');
    }
  });
});