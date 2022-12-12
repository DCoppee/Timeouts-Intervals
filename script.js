let prout = ["p", "r", "o" , "u", "t"];
function typeLetter() {
for (let elem of prout) {
    console.log(elem); 
}
}
//setInterval(typeLetter,1000);

/*var body = document.body;
var h1 = document.createElement("h1");
body.appendChild(h1);
var seconds = 0;
setInterval(counter, 1000);
function counter() {
    ++seconds;
    h1.innerHTML = seconds +" seconds of happiness";
    
}
var h2 = document.createElement("h2");
body.appendChild(h2);
setTimeout(minute, 60000);
function minute() {
    if (seconds = 60000) {
    h2.innerHTML = "A minute has passed";
    body.appendChild(h2);
    }
    else if (seconds = seconds*60000) {
        var minute = 1;
        for (minute = 1; minute >= 1; minute++) {
            h2.innerHTML = minute + " minutes has passed";
            body.appendChild(h2);
        }
    }
}*/


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