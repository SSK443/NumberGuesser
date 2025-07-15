const dis = document.getElementById("display");
const chances = document.getElementById("chances");
const previousGuess = document.getElementById("previousGuess");
const win = document.getElementById("win");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
let chance = 10;
let previousGuessStore = [];
let targetNumber = RandomNumber();

function RandomNumber() {
  return Math.floor(Math.random() * 15) + 1;
}

function Matcher() {
  if (!dis.value || isNaN(dis.value)) {
    alert("please fill the form or enter number");
    dis.value = "";
  } else {
    chance--;
    chances.innerHTML = chance;

    if (parseInt(dis.value) === targetNumber) {
      win.innerHTML = "you are winner sir";
      dis.value = "";

      dis.style.display = "none";
      btn.style.display = "none";
      const reset = document.createElement("button");
      reset.id = "reset";
      reset.innerHTML = "Reset";
      reset.setAttribute("onclick", "reset()");
      btn2.innerHTML="";
      btn2.appendChild(reset);
      setTimeout(() => {
        win.innerHTML = "";
      }, 3000);
    } else {
      previousGuessStore.push(dis.value);
      previousGuess.innerHTML = previousGuessStore.join(", ");

      console.log(previousGuessStore);

      dis.value = "";
      if (chance <= 0) {
        dis.style.display = "none";
        btn.style.display = "none";
        const reset = document.createElement("button");
        reset.id = "reset";
        reset.innerHTML = "reset";
        reset.setAttribute("onclick", "reset()");
        btn2.appendChild(reset);
      }
    }
  }
}

function reset() {
  dis.style.display = "block";
  btn.style.display = "block";
  // btn2.style.display = "none";
  btn2.innerHTML = ""; // clear reset button
  win.innerHTML = ""; // clear win messag
  chance = 10;
  chances.innerHTML = chance;
  previousGuessStore = [];
  previousGuess.innerHTML = "";
  targetNumber = RandomNumber();
}
