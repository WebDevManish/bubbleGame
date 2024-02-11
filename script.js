let clutter = "";
let text;
let num;
let score = 0;
let value;
let time = 120;
let panelBottom = document.querySelector(".panelBottom");

const makeBubble = () => {
  clutter = "";
  for (let i = 1; i <= 168; i++) {
    num = Math.floor(Math.random() * 10);
    text = `<div class="bubble">${num}</div>`;
    clutter += text;
    document.querySelector(".panelBottom").innerHTML = clutter;
  }
};

const getNewHit = () => {
  num = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = num;
};

const incraseScore = () => {
  score = document.querySelector("#score").textContent;
  score = Number(score);
  score += 10;
  document.querySelector("#score").textContent = score;
};

const runGame = () => {
  panelBottom.addEventListener("click", function (details) {
    value = Number(details.target.textContent);
    if (value == num) {
      makeBubble();
      getNewHit();
      incraseScore();
    }else{
        gameOver();
    }
  });
};

const timer = () => {
  setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".time").textContent = time;
    } else {
      clearInterval();
      gameOver();
    }
  }, 1000);
};

const gameOver = () => {
  panelBottom.innerHTML = `<h1>Game Over!!</h1>`;
  panelBottom.style.display = "flex";
  panelBottom.style.flexDirection = "column";
  panelBottom.style.justifyContent = "center";
  panelBottom.style.alignItems = "center";
  panelBottom.style.fontSize = "32px";
  panelBottom.innerHTML += `<h2>Your Score is ${score}.</h2>`
};

makeBubble();
timer();
getNewHit();
runGame();