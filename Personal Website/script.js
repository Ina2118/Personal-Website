



function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


//dog
const facts = [
"Woof! I'm Yuki 🐶, living with my amazing human.",

"Right now, they're mastering HTML, CSS, and JavaScript 💻",

"They have a crazy love for design and all things visually awesome 🎨",

"Their dream? Making websites that are as interactive as a game of fetch 🚀",

"They drink more coffee than water… I try to hide the cups ☕",

"Want to know more about my human? Check out their CV 📄"
];

let index = 0;

function giveTreat() {
  const speech = document.getElementById("dog-speech");
  const dog = document.querySelector(".dog");

  // Показваме балончето при даване на лакомство (игра режим)
  speech.style.display = "block";

  if (index < facts.length) {
    speech.textContent = facts[index];

    dog.style.transform = "translateY(-10px)";
    setTimeout(() => {
      dog.style.transform = "translateY(0)";
    }, 300);

    index++;
  } else {
    speech.textContent = "Want to meet my human? Give them a call or set up an interview 📩";

    setTimeout(() => {
      // РЕСТАРТ
      index = 0;

      // Връщаме оригиналния текст
      speech.textContent = "Feed me a snack, and I'll tell you why my human is awesome 🐶";

      // МНОГО важно: връщаме контролa към CSS → hover режим
      speech.style.display = "";

    }, 4000);
  }
}
