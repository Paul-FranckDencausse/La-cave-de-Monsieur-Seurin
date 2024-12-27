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
  });
  