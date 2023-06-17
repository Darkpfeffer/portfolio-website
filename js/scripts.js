/* Add margin at specific device width */
function deviceWidthChange (event) {
  for (i=0; i<pageContent.length; i++) {
    if (event.matches) {
    pageContent[i].style.marginTop = "75px"
  } else {
    pageContent[i].style.marginTop = "125px";
  }
  }
}

/* Toggle Hamburger menu */
function myFunction() {
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var deviceWidth = window.matchMedia("(max-width: 612px)");
  var x = document.getElementById("myLinks");
  pageContent = document.querySelectorAll(".page-content");
  
  x.style.display = "none";

deviceWidthChange(deviceWidth);
//add listener to the change of width while using the site
deviceWidth.addListener(deviceWidthChange); 