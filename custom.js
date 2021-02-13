function showMenu() {
  var b = document.getElementById("bar");
  var t = document.getElementById("times");
  var m= document.getElementsByClassName("mob-menu");
  
  b.style.display = "none";
  t.style.display = "block";
  m[0].style.display = "block";
}

function closeMenu()
{
   
  var b = document.getElementById("bar");
  var t = document.getElementById("times");
  var m= document.querySelector(".mob-menu");
  b.style.display = "block";
  t.style.display = "none";
  m.style.display = "none";

}