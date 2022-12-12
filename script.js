//Write a function that mimics the behaviour of a typewriter. Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.
let prout = ["p", "r", "o" , "u", "t"];
let i=0;
function typeLetter() {
    console.log(prout[i]);
    i++;
  }
setInterval(typeLetter, 1000);
clearInterval(typeLetter, 1000);

//Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
  //Créer les éléments pour afficher le timer
var body = document.body;
var h1 = document.createElement("h1");
body.appendChild(h1);
  //Stocker la valeur des secondes
var seconds = 0;
  //Démarrer la fonction à intervalle temporel
setInterval(everySec, 1000);
function everySec() {
    ++seconds;
  //Écrire directement dans les éléments créés
    h1.innerHTML = seconds +" second of happiness";
  //Accord grammatical du nom si plusieurs secondes
    if (seconds>1) {
      h1.innerHTML = seconds +" seconds of happiness"
    }
}

var h2 = document.createElement("h2");
body.appendChild(h2);
var minute = 0;
setInterval(everyMin, 60000);
function everyMin() {
    ++minute;
    h2.innerHTML = minute + " minute has passed";
    if (minute>1) {
      h2.innerHTML = minute + " minutes has passed";
    }
 }

/*Example 1 : setTimeOut()
console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);*/

/*Example 2 : setTimeOut() + addEventListener()
function theExplosion() {
    alert("BOOM!");
  }
  
  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);*/

/*Example 3 : setTimeOut() + recursion
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
}*/

/*Example 4 : setInterval()
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);*/
