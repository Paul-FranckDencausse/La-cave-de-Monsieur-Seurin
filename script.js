document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('navbarDropdown');
  const dropdownMenu = dropdownToggle.nextElementSibling;

  dropdownToggle.addEventListener('mouseover', function() {
    dropdownMenu.style.display = 'block';
  });

  dropdownToggle.addEventListener('mouseout', function() {
    dropdownMenu.style.display = 'none';
  });

  dropdownMenu.addEventListener('mouseover', function() {
    dropdownMenu.style.display = 'block';
  });

  dropdownMenu.addEventListener('mouseout', function() {
    dropdownMenu.style.display = 'none';
  });

  // Améliorer le menu déroulant sur petits écrans
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
});
