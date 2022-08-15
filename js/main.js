//  Import html
function includeHTML() {
  var z, i, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];

    file = elmnt.getAttribute("load-html");

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("load-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();

      return;
    }
  }
}
// 

// Tab Pruduct List
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab__list");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

function activeBtn(btnName) {
    var i;
    var x = document.getElementsByClassName("btn");
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#40403E"; 
      x[i].style.color = "#B3AFA8";
    }
    document.getElementById(btnName).style.backgroundColor = "#fe980f";
    document.getElementById(btnName).style.color = "#FFF";
}
// End Tab Pruduct List

// Change Quantity
function increaseValue(nameInp, subInp) {
  var value = parseInt(document.getElementById(nameInp).value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(nameInp).value = value;
  document.getElementById(subInp).value = value;
}

function decreaseValue(nameInp, subInp) {
  var value = parseInt(document.getElementById(nameInp).value);
  value = isNaN(value) ? 0 : value;
  value < 2 ? value = 2 : '';
  value--;
  document.getElementById(nameInp).value = value;
  document.getElementById(subInp).value = value;
}
// End Change Quantity

// Scroll To Top
var mybutton = document.getElementById('scrollTop');
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('scrollTop').style.display = "block";
  } else {
    document.getElementById('scrollTop').style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Scroll To Top