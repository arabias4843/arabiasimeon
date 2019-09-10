//Arabia Simeon portfolio site javascript

//animated dropdown menu
function myFunction(x) {
  x.classList.toggle("change");
  var elem = document.getElementById('navID'),
  Style = window.getComputedStyle(elem),
  left = Style.getPropertyValue("left");
  document. getElementById('navID').classList.toggle('active');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
