// document.addEventListener("DOMContentLoaded", function () {
// const rangeInput = document.querySelector('input[type="range"]');
const slider = document.querySelector(".slider");
const paslength = document.getElementById("sliderv");
slider.addEventListener("input", function () {
  paslength.innerHTML = slider.value;
  slider.style.setProperty(
    "--value",
    (this.value - this.min + 1) / (this.max - this.min + 1)
  );
});

const chboxes = document.getElementsByClassName("checkbox");
let count = 0;

const strengthes = ["", "TOO WEAK", "WEAK", "MEDIUM", "STRONG"];
const strength = document.getElementById("strength");

const bars = document.getElementsByClassName("bar");
const backcolors = ["#18171F", "#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];

for (let i = 0; i < chboxes.length; i++) {
  chboxes[i].addEventListener("change", function () {
    if (this.checked) {
      count += 1;
    } else {
      count -= 1;
    }
    strength.innerHTML = strengthes[count];
    for (let i = 0; i < bars.length; i++) {
      if (i <= count - 1) {
        bars[i].style.backgroundColor = backcolors[count];
        bars[i].style.borderColor = backcolors[count];
      } else {
        bars[i].style.backgroundColor = backcolors[0];
        bars[i].style.borderColor = "#E6E5EA";
      }
    }
  });
}

document.getElementById("forcopy").addEventListener("click", function () {
  // Get the text from the <p> tag
  const textToCopy = document.getElementById("password").textContent;
  const copied = document.getElementById("copied");
  navigator.clipboard.writeText(textToCopy);
  copied.textContent = "copied";
  setTimeout(function () {
    copied.textContent = "";
  }, 2000);
});
// });

function genPas() {
  // const slider = document.querySelector(".slider");
  const upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const symbols = "~!@-#$";

  const upcasech = document.getElementById("upcase");
  const lowercasech = document.getElementById("lowercase");
  const numsch = document.getElementById("nums");
  const symbolsch = document.getElementById("symbols");

  const length = slider.value;
  let str = "";
  let notch = 4;
  if (upcasech.checked) {
    str += upcase;
    notch -= 1;
  }
  if (lowercasech.checked) {
    str += lowercase;
    notch -= 1;
  }
  if (numsch.checked) {
    str += nums;
    notch -= 1;
  }
  if (symbolsch.checked) {
    str += symbols;
    notch -= 1;
  }
  console.log(notch);
  const password = document.getElementById("password");
  password.style.color = "#E6E5EA";
  if (notch === 4 || slider.value === "0") {
    password.innerHTML = "input info";
    password.style.color = "red";
    return;
  }

  let generated = "";
  const max = str.length;
  console.log(str);
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * max);
    generated += str[char];
  }
  password.innerHTML = generated;
}
