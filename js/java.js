//The following part is for the top navigation
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

//All the following parts are for the popups for the Awards section on the Home page
showKBS_2019 = () => {
  let popup = document.getElementById("KBS_2019_Popup"); //id for the popup for each award show
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideKBS_2019 = () => {
  let popup = document.getElementById("KBS_2019_Popup"); //id for the popup for each award show
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};


showMBC_2017 = () => {
  let popup = document.getElementById("MBC_2017_Popup");
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideMBC_2017 = () => {
  let popup = document.getElementById("MBC_2017_Popup");
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};


showKBS_2015 = () => {
  let popup = document.getElementById("KBS_2015_Popup"); //id for the popup for each award show
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideKBS_2015 = () => {
  let popup = document.getElementById("KBS_2015_Popup"); //id for the popup for each award show
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};


showKBS_2014 = () => {
  let popup = document.getElementById("KBS_2014_Popup");
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideKBS_2014 = () => {
  let popup = document.getElementById("KBS_2014_Popup");
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};


showSBS_2013 = () => {
  let popup = document.getElementById("SBS_2013_Popup"); //id for the popup for each award show
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideSBS_2013 = () => {
  let popup = document.getElementById("SBS_2013_Popup"); //id for the popup for each award show
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};


showMBC_2012 = () => {
  let popup = document.getElementById("MBC_2012_Popup"); //id for the popup for each award show
  popup.style.visibility = "visible";
  popup.style.opacity = 1;
};
hideMBC_2012 = () => {
  let popup = document.getElementById("MBC_2012_Popup"); //id for the popup for each award show
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.visibility = "hidden";
  }, 700);
};
