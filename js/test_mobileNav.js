//All the following parts are for the top navigation
//This is one every page

//This bit of JavaScript is toggling between adding and removing the "responsive" class to the top navigation bar when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
