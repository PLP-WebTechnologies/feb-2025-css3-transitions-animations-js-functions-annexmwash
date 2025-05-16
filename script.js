const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const colorPicker = document.getElementById("colorPicker");
const saveBtn = document.getElementById("saveBtn");

// 🎯 Apply saved color on load
window.addEventListener("load", () => {
  const savedColor = localStorage.getItem("preferredColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});

// 🎬 Animate the box on button click
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove the animation class after animation ends
  setTimeout(() => {
    box.classList.remove("animate");
  }, 500); // match transition time in CSS
});

// 💾 Save user's preferred color in localStorage
saveBtn.addEventListener("click", () => {
  const selectedColor = colorPicker.value;
  box.style.backgroundColor = selectedColor;
  localStorage.setItem("preferredColor", selectedColor);
  alert("Color preference saved! 🎉");
});
