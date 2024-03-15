let h1 = document.querySelector("h1");
let par = document.querySelector("p");
let div = document.querySelector("div");
let date = new Date().getHours();

setInterval(() => {
  h1.textContent = new Date().toLocaleTimeString();
  div.setAttribute("class", "img");
  if (date >= 5 && date <= 8) {
    div.style.backgroundImage = "url('./images/morning.jpg')";
  } else if (date >= 9 && date <= 11) {
    div.style.backgroundImage = "url('./images/sunrise-day.jpg')";
  } else if (date >= 12 && date <= 15) {
    div.style.backgroundImage = "url('./images/midle-day.jpg')";
  } else if (date >= 16 && date <= 19) {
    div.style.backgroundImage = "url('./images/aftornoon-dusk.jpg')";
  } else if (date >= 20 && date <= 23) {
    div.style.backgroundImage = "url('./images/evening-nigh.jpg')";
    div.style.backgroundPosition = "bottom";
  } else if (date >= 0 && date < 5) {
    div.style.backgroundImage = "url('./images/nigh.jpg')";
  }
}, 1000);

setInterval(() => {
  par.textContent = new Date().toLocaleDateString();
},1000);
