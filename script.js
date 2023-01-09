function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    navToggleNav.classList.toggle("_active");
    html.classList.toggle("_overflow");
    body.classList.toggle("_overflow");
    
    
}

let menu = document.querySelector('.menu')
let toggle = document.querySelector('.toggle')
toggle.onclick = function() {
  menu.classList.toggle('active')
}