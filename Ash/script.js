const darkMode = document.getElementById("darkMode");
const body = document.getElementById("body");
const rulesToggle = document.getElementById("rulesToggle");
const rulesContent = document.getElementById("rulesContent");

darkMode.addEventListener("click", () => {
  if (darkMode.innerHTML === '<i class="fa-regular fa-sun"></i>') {
    darkMode.innerHTML = '<i class="fa-regular fa-moon"></i>';
    darkMode.style.backgroundColor = "#151313";
    darkMode.style.color = "#f8f9fa";
    body.style.backgroundColor = "#f8f9fa";
    body.style.color = "#151313";
    rulesToggle.style.borderColor = "#151313";
    rulesToggle.style.color = "#151313";
  } else {
    darkMode.innerHTML = '<i class="fa-regular fa-sun"></i>';
    darkMode.style.backgroundColor = "#f8f9fa";
    darkMode.style.color = "#151313";
    body.style.backgroundColor = "#151313";
    body.style.color = "#f8f9fa";
    rulesToggle.style.borderColor = "#f8f9fa";
    rulesToggle.style.color = "#f8f9fa";
  }
});

rulesToggle.addEventListener("click", () => {
  rulesToggle.classList.toggle("active");
});
