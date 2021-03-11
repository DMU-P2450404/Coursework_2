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


//All the following parts are for the drop down for the Dramas section on the Filmography page
openDropDownRiver = () => {
  let dropDownInfo = document.getElementById("dropDownRiver"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  riverArrowUp.style.visibility = "visible"; //Making the up arrow visible
  riverArrowUp.style.display = "block";
  riverArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  riverArrowDown.style.display = "none";
};
closeDropDownRiver = () => {
  let dropDownInfo = document.getElementById("dropDownRiver"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  riverArrowUp.style.display = "none"; //Making the up arrow invisible
  riverArrowUp.style.visibility = "hidden";
  riverArrowDown.style.visibility = "visible"; //Making the down arrow visible
  riverArrowDown.style.display = "block";
};


openDropDownNokdu = () => {
  let dropDownInfo = document.getElementById("dropDownNokdu"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  nokduArrowUp.style.visibility = "visible"; //Making the up arrow visible
  nokduArrowUp.style.display = "block";
  nokduArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  nokduArrowDown.style.display = "none";
};
closeDropDownNokdu = () => {
  let dropDownInfo = document.getElementById("dropDownNokdu"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  nokduArrowUp.style.display = "none"; //Making the up arrow invisible
  nokduArrowUp.style.visibility = "hidden";
  nokduArrowDown.style.visibility = "visible"; //Making the down arrow visible
  nokduArrowDown.style.display = "block";
};


openDropDownAlarm = () => {
  let dropDownInfo = document.getElementById("dropDownAlarm"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  alarmArrowUp.style.visibility = "visible"; //Making the up arrow visible
  alarmArrowUp.style.display = "block";
  alarmArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  alarmArrowDown.style.display = "none";
};
closeDropDownAlarm = () => {
  let dropDownInfo = document.getElementById("dropDownAlarm"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  alarmArrowUp.style.display = "none"; //Making the up arrow invisible
  alarmArrowUp.style.visibility = "hidden";
  alarmArrowDown.style.visibility = "visible"; //Making the down arrow visible
  alarmArrowDown.style.display = "block";
};


openDropDownRadio = () => {
  let dropDownInfo = document.getElementById("dropDownRadio"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  radioArrowUp.style.visibility = "visible"; //Making the up arrow visible
  radioArrowUp.style.display = "block";
  radioArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  radioArrowDown.style.display = "none";
};
closeDropDownRadio = () => {
  let dropDownInfo = document.getElementById("dropDownRadio"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  radioArrowUp.style.display = "none"; //Making the up arrow invisible
  radioArrowUp.style.visibility = "hidden";
  radioArrowDown.style.visibility = "visible"; //Making the down arrow visible
  radioArrowDown.style.display = "block";
};


openDropDownEmperor = () => {
  let dropDownInfo = document.getElementById("dropDownEmperor"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  emperorArrowUp.style.visibility = "visible"; //Making the up arrow visible
  emperorArrowUp.style.display = "block";
  emperorArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  emperorArrowDown.style.display = "none";
};
closeDropDownEmperor = () => {
  let dropDownInfo = document.getElementById("dropDownEmperor"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  emperorArrowUp.style.display = "none"; //Making the up arrow invisible
  emperorArrowUp.style.visibility = "hidden";
  emperorArrowDown.style.visibility = "visible"; //Making the down arrow visible
  emperorArrowDown.style.display = "block";
};


openDropDownGoblin = () => {
  let dropDownInfo = document.getElementById("dropDownGoblin"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  goblinArrowUp.style.visibility = "visible"; //Making the up arrow visible
  goblinArrowUp.style.display = "block";
  goblinArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  goblinArrowDown.style.display = "none";
};
closeDropDownGoblin = () => {
  let dropDownInfo = document.getElementById("dropDownGoblin"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  goblinArrowUp.style.display = "none"; //Making the up arrow invisible
  goblinArrowUp.style.visibility = "hidden";
  goblinArrowDown.style.visibility = "visible"; //Making the down arrow visible
  goblinArrowDown.style.display = "block";
};


openDropDownGhost = () => {
  let dropDownInfo = document.getElementById("dropDownGhost"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  ghostArrowUp.style.visibility = "visible"; //Making the up arrow visible
  ghostArrowUp.style.display = "block";
  ghostArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  ghostArrowDown.style.display = "none";
};
closeDropDownGhost = () => {
  let dropDownInfo = document.getElementById("dropDownGhost"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  ghostArrowUp.style.display = "none"; //Making the up arrow invisible
  ghostArrowUp.style.visibility = "hidden";
  ghostArrowDown.style.visibility = "visible"; //Making the down arrow visible
  ghostArrowDown.style.display = "block";
};


openDropDownPage = () => {
  let dropDownInfo = document.getElementById("dropDownPage"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  pageArrowUp.style.visibility = "visible"; //Making the up arrow visible
  pageArrowUp.style.display = "block";
  pageArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  pageArrowDown.style.display = "none";
};
closeDropDownPage = () => {
  let dropDownInfo = document.getElementById("dropDownPage"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  pageArrowUp.style.display = "none"; //Making the up arrow invisible
  pageArrowUp.style.visibility = "hidden";
  pageArrowDown.style.visibility = "visible"; //Making the down arrow visible
  pageArrowDown.style.display = "block";
};


openDropDownNightmare = () => {
  let dropDownInfo = document.getElementById("dropDownNightmare"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  nightmareArrowUp.style.visibility = "visible"; //Making the up arrow visible
  nightmareArrowUp.style.display = "block";
  nightmareArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  nightmareArrowDown.style.display = "none";
};
closeDropDownNightmare = () => {
  let dropDownInfo = document.getElementById("dropDownNightmare"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  nightmareArrowUp.style.display = "none"; //Making the up arrow invisible
  nightmareArrowUp.style.visibility = "hidden";
  nightmareArrowDown.style.visibility = "visible"; //Making the down arrow visible
  nightmareArrowDown.style.display = "block";
};


openDropDownWho_are_you = () => {
  let dropDownInfo = document.getElementById("dropDownWho_are_you"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  who_are_youArrowUp.style.visibility = "visible"; //Making the up arrow visible
  who_are_youArrowUp.style.display = "block";
  who_are_youArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  who_are_youArrowDown.style.display = "none";
};
closeDropDownWho_are_you = () => {
  let dropDownInfo = document.getElementById("dropDownWho_are_you"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  who_are_youArrowUp.style.display = "none"; //Making the up arrow invisible
  who_are_youArrowUp.style.visibility = "hidden";
  who_are_youArrowDown.style.visibility = "visible"; //Making the down arrow visible
  who_are_youArrowDown.style.display = "block";
};


openDropDownSmells = () => {
  let dropDownInfo = document.getElementById("dropDownSmells"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  smellsArrowUp.style.visibility = "visible"; //Making the up arrow visible
  smellsArrowUp.style.display = "block";
  smellsArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  smellsArrowDown.style.display = "none";
};
closeDropDownSmells = () => {
  let dropDownInfo = document.getElementById("dropDownSmells"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  smellsArrowUp.style.display = "none"; //Making the up arrow invisible
  smellsArrowUp.style.visibility = "hidden";
  smellsArrowDown.style.visibility = "visible"; //Making the down arrow visible
  smellsArrowDown.style.display = "block";
};


openDropDownVoice = () => {
  let dropDownInfo = document.getElementById("dropDownVoice"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  voiceArrowUp.style.visibility = "visible"; //Making the up arrow visible
  voiceArrowUp.style.display = "block";
  voiceArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  voiceArrowDown.style.display = "none";
};
closeDropDownVoice = () => {
  let dropDownInfo = document.getElementById("dropDownVoice"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  voiceArrowUp.style.display = "none"; //Making the up arrow invisible
  voiceArrowUp.style.visibility = "hidden";
  voiceArrowDown.style.visibility = "visible"; //Making the down arrow visible
  voiceArrowDown.style.display = "block";
};


openDropDownMoon = () => {
  let dropDownInfo = document.getElementById("dropDownMoon"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  moonArrowUp.style.visibility = "visible"; //Making the up arrow visible
  moonArrowUp.style.display = "block";
  moonArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  moonArrowDown.style.display = "none";
};
closeDropDownMoon = () => {
  let dropDownInfo = document.getElementById("dropDownMoon"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  moonArrowUp.style.display = "none"; //Making the up arrow invisible
  moonArrowUp.style.visibility = "hidden";
  moonArrowDown.style.visibility = "visible"; //Making the down arrow visible
  moonArrowDown.style.display = "block";
};


//All the following parts are for the drop down for the Movies section on the Filmography page
openDropDownPrincess = () => {
  let dropDownInfo = document.getElementById("dropDownPrincess"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  princessArrowUp.style.visibility = "visible"; //Making the up arrow visible
  princessArrowUp.style.display = "block";
  princessArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  princessArrowDown.style.display = "none";
};
closeDropDownPrincess = () => {
  let dropDownInfo = document.getElementById("dropDownPrincess"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  princessArrowUp.style.display = "none"; //Making the up arrow invisible
  princessArrowUp.style.visibility = "hidden";
  princessArrowDown.style.visibility = "visible"; //Making the down arrow visible
  princessArrowDown.style.display = "block";
};


openDropDownUnforgettable = () => {
  let dropDownInfo = document.getElementById("dropDownUnforgettable"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  unforgettableArrowUp.style.visibility = "visible"; //Making the up arrow visible
  unforgettableArrowUp.style.display = "block";
  unforgettableArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  unforgettableArrowDown.style.display = "none";
};
closeDropDownUnforgettable = () => {
  let dropDownInfo = document.getElementById("dropDownUnforgettable"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  unforgettableArrowUp.style.display = "none"; //Making the up arrow invisible
  unforgettableArrowUp.style.visibility = "hidden";
  unforgettableArrowDown.style.visibility = "visible"; //Making the down arrow visible
  unforgettableArrowDown.style.display = "block";
};


openDropDownKiller = () => {
  let dropDownInfo = document.getElementById("dropDownKiller"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  killerArrowUp.style.visibility = "visible"; //Making the up arrow visible
  killerArrowUp.style.display = "block";
  killerArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  killerArrowDown.style.display = "none";
};
closeDropDownKiller = () => {
  let dropDownInfo = document.getElementById("dropDownKiller"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  killerArrowUp.style.display = "none"; //Making the up arrow invisible
  killerArrowUp.style.visibility = "hidden";
  killerArrowDown.style.visibility = "visible"; //Making the down arrow visible
  killerArrowDown.style.display = "block";
};


openDropDownKing = () => {
  let dropDownInfo = document.getElementById("dropDownKing"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  kingArrowUp.style.visibility = "visible"; //Making the up arrow visible
  kingArrowUp.style.display = "block";
  kingArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  kingArrowDown.style.display = "none";
};
closeDropDownKing = () => {
  let dropDownInfo = document.getElementById("dropDownKing"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  kingArrowUp.style.display = "none"; //Making the up arrow invisible
  kingArrowUp.style.visibility = "hidden";
  kingArrowDown.style.visibility = "visible"; //Making the down arrow visible
  kingArrowDown.style.display = "block";
};


openDropDownSpy = () => {
  let dropDownInfo = document.getElementById("dropDownSpy"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  spyArrowUp.style.visibility = "visible"; //Making the up arrow visible
  spyArrowUp.style.display = "block";
  spyArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  spyArrowDown.style.display = "none";
};
closeDropDownSpy = () => {
  let dropDownInfo = document.getElementById("dropDownSpy"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  spyArrowUp.style.display = "none"; //Making the up arrow invisible
  spyArrowUp.style.visibility = "hidden";
  spyArrowDown.style.visibility = "visible"; //Making the down arrow visible
  spyArrowDown.style.display = "block";
};


openDropDownFamily = () => {
  let dropDownInfo = document.getElementById("dropDownFamily"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  familyArrowUp.style.visibility = "visible"; //Making the up arrow visible
  familyArrowUp.style.display = "block";
  familyArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  familyArrowDown.style.display = "none";
};
closeDropDownFamily = () => {
  let dropDownInfo = document.getElementById("dropDownFamily"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  familyArrowUp.style.display = "none"; //Making the up arrow invisible
  familyArrowUp.style.visibility = "hidden";
  familyArrowDown.style.visibility = "visible"; //Making the down arrow visible
  familyArrowDown.style.display = "block";
};


openDropDownMan = () => {
  let dropDownInfo = document.getElementById("dropDownMan"); //id for the popup for each drama
  dropDownInfo.style.visibility = "visible"; //Making the drop down visible
  dropDownInfo.style.display = "block";
  manArrowUp.style.visibility = "visible"; //Making the up arrow visible
  manArrowUp.style.display = "block";
  manArrowDown.style.visibility = "hidden"; //Making the down arrow invisible
  manArrowDown.style.display = "none";
};
closeDropDownMan = () => {
  let dropDownInfo = document.getElementById("dropDownMan"); //id for the popup for each award show
  dropDownInfo.style.display = "none"; //Making the drop down invisible
  dropDownInfo.style.visibility = "hidden";
  manArrowUp.style.display = "none"; //Making the up arrow invisible
  manArrowUp.style.visibility = "hidden";
  manArrowDown.style.visibility = "visible"; //Making the down arrow visible
  manArrowDown.style.display = "block";
};
