/* Add margin at specific device width */
function deviceWidthChange (event) {
  if (event.matches) {
    pageContent.style.marginTop = "125px"
  } else {
    pageContent.style.marginTop = "175px";
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
  pageContent = document.querySelector(".page-content");
  
  x.style.display = "none";

deviceWidthChange(deviceWidth);
//add listener to the change of width while using the site
deviceWidth.addListener(deviceWidthChange); 