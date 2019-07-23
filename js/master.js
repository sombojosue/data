function menubar(){
  var menu = document.querySelector(".menu_mobile_responsible");
  var header = document.querySelector(".header");
  header.style.height = '290px';
  menu.style.display = 'block';
}
function closeMenu(){
  var menu = document.querySelector(".menu_mobile_responsible");
  var header = document.querySelector(".header");
  header.style.height = '80px';
  menu.style.display = 'none';  
}
