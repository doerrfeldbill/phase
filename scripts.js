// Retrieve a unix timestamp for date
var timestamp = Math.round(new Date().getTime() / 1000); //Returns a unix timestamp ie. 1572958651

// Make request to Farmsense API to retrieve moon phase
let moon = new XMLHttpRequest();
moon.open('GET', 'https://cors-anywhere.herokuapp.com/http://api.farmsense.net/v1/moonphases/?d='+timestamp, true);
//moon.open('GET', 'http://api.farmsense.net/v1/moonphases/?d=59666674651', true); //uncomment for testing purposes
/*
TIMESTAMP TESTS
11% Waning Crescent: 49403867651 **
100% Full Moon: 39209867651
Waxing Crescent: 59403867651
1st Quarter: 59666674651
Waning Crescent: 5998374651
New Moon: 5993902651
31% Waxing Cresecnet: 5900002651
30% Waxing Crescent: 6900115651
3% Waning Crescent: 88379867651
*/
moon.onload = function moonphase() {
  // Convert JSON data to an object to parse
  var moonresult = JSON.parse(this.response);
  var str = JSON.stringify(moonresult);
  //set variable for phase
  var PhaseLocation = str.search("Phase");
  var PhaseString = str.slice(PhaseLocation+8,(PhaseLocation+50));
  var PhaseStringLocation = PhaseString.indexOf('"');
  var phase = PhaseString.slice(0,(PhaseStringLocation));
  document.getElementById("phase").innerHTML = phase;
  //set variable for moon type
  var MoonLocation = str.search("Moon");
  var MoonString = str.slice(MoonLocation+8,(MoonLocation+50));
  var MoonStringLocation = MoonString.indexOf('"');
  var moon = MoonString.slice(0,(MoonStringLocation));
  document.getElementById("type").innerHTML = '"'+moon+'"';
  //set variable for moon illumination
  var IlluminationLocation = str.search("Illumination");
  var illumination = str.slice(IlluminationLocation+14,(IlluminationLocation+19));
  var index = illumination.indexOf(",");
  var finalIllumination = illumination.slice(0,index);
  //compute percentage based off illumination
  percentage = (finalIllumination * 100)+"%";

  //set picture and text output based off moon illumination
  if (finalIllumination >  0.00 && finalIllumination < 0.10) {
    document.getElementById("moon").src="moon-phases/0.0.svg";
    document.getElementById("litness").innerHTML = "The moon is like, not lit at all.";
    document.getElementById("percentage").innerHTML = "The moon is only "+percentage+" lit.";
  }
  if (finalIllumination >=  0.1 && finalIllumination < 0.2) {
    document.getElementById("moon").src="moon-phases/0.1.svg";
    document.getElementById("litness").innerHTML = "The moon is like, hardly lit.";
    document.getElementById("percentage").innerHTML = "The moon is only "+percentage+" lit.";
  }
  if (finalIllumination >=  0.2 && finalIllumination < 0.3) {
    document.getElementById("moon").src="moon-phases/0.2.svg";
    document.getElementById("litness").innerHTML = "Ok yeah, the moon is barely lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.3 && finalIllumination < 0.4) {
    document.getElementById("moon").src="moon-phases/0.3.svg";
    document.getElementById("litness").innerHTML = "Have you seen the moon lately? It's only sorta lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.4 && finalIllumination < 0.5) {
    document.getElementById("moon").src="moon-phases/0.4.svg";
    document.getElementById("litness").innerHTML = "The moon's like almost halfway lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.5 && finalIllumination < 0.6) {
    document.getElementById("moon").src="moon-phases/0.5.svg";
    document.getElementById("litness").innerHTML = "Half dark and half lit... moon you're being so bipolar.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.6 && finalIllumination < 0.7) {
    document.getElementById("moon").src="moon-phases/0.6.svg";
    document.getElementById("litness").innerHTML = "Huh, the moon is kinda lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.7 && finalIllumination < 0.8) {
    document.getElementById("moon").src="moon-phases/0.7.svg";
    document.getElementById("litness").innerHTML = "The moon is pretty cool but not totally lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.8 && finalIllumination < 0.9) {
    document.getElementById("moon").src="moon-phases/0.8.svg";
    document.getElementById("litness").innerHTML = "Dope. The moon is like pretty lit.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination >=  0.9 && finalIllumination < 1.0) {
    document.getElementById("moon").src="moon-phases/0.9.svg";
    document.getElementById("litness").innerHTML = "Dang, is that moon full? No, but it srsly lit tho.";
    document.getElementById("percentage").innerHTML = "The moon is "+percentage+" lit.";
  }
  if (finalIllumination == 1) {
    document.getElementById("moon").src="moon-phases/1.0.svg";
    document.getElementById("litness").innerHTML = "Damn, this moon is like legit lit. Like, fully lit."
    document.getElementById("percentage").innerHTML = "The moon is 100% lit.";
 }
  if (finalIllumination == 0) {
    document.getElementById("moon").src="moon-phases/0.0.svg";
    document.getElementById("litness").innerHTML = "Woah. The moon is srsly not lit.";
    document.getElementById("percentage").innerHTML = "The moon is 0% lit.";
  }
}
moon.send();
