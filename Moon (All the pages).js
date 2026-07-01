$(document).ready(function() {

const overlay = document.getElementById("dimOverlay");
const moonBtn = document.getElementById("moonBtn");
const settingsPopup = document.getElementById("settingsPopup");
const dimSlider = document.getElementById("dimSlider");
const fontPicker = document.getElementById("fontPicker");
const fontSizePicker = document.getElementById("fontSizePicker");

// Create <style> tags for font and size
let fontStyleTag = document.createElement("style");
let fontSizeStyleTag = document.createElement("style");
document.head.appendChild(fontStyleTag);
document.head.appendChild(fontSizeStyleTag);

// --- Load Stored Values on Page Load ---

// Dim level
const savedDim = localStorage.getItem("dimLevel");
if (savedDim !== null) {
  const opacity = parseInt(savedDim, 10) / 100;
  overlay.style.opacity = opacity;
  dimSlider.value = savedDim;
}

// Font family
const savedFont = localStorage.getItem("userFont");
if (savedFont) {
  applyFont(savedFont);
  fontPicker.value = savedFont;
}

// Font size
const savedFontSize = localStorage.getItem("userFontSize");
if (savedFontSize) {
  applyFontSize(savedFontSize);
  fontSizePicker.value = savedFontSize;
}

// --- Event Listeners ---

// Show/hide settings popup
moonBtn.addEventListener("click", (e) => {
  settingsPopup.classList.toggle("hidden");
  e.stopPropagation(); // Prevent immediate close
});

// Hide popup when clicking outside
document.addEventListener("click", (e) => {
  if (!settingsPopup.contains(e.target) && e.target !== moonBtn) {
    settingsPopup.classList.add("hidden");
  }
});

// Update dimming
dimSlider.addEventListener("input", () => {
  const val = dimSlider.value;
  overlay.style.opacity = val / 100;
  localStorage.setItem("dimLevel", val);
});

// Update font
fontPicker.addEventListener("change", () => {
  const selectedFont = fontPicker.value;
  applyFont(selectedFont);
  localStorage.setItem("userFont", selectedFont);
});

// Update font size
fontSizePicker.addEventListener("change", () => {
  const selectedSize = fontSizePicker.value;
  applyFontSize(selectedSize);
  localStorage.setItem("userFontSize", selectedSize);
});

// --- Functions ---

function applyFont(font) {
  if (!font) {
    fontStyleTag.textContent = ""; // Reset
  } else {
    fontStyleTag.textContent = `* { font-family: ${font} !important; }`;
  }
}

function applyFontSize(size) {
  if (!size) {
    fontSizeStyleTag.textContent = ""; // Reset
  } else {
    fontSizeStyleTag.textContent = `* { font-size: ${size} !important; }`;
  }
}
  
  });
