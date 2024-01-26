const convertBtn = document.getElementById("convertBtn");
const celsiusInput = document.getElementById("celsius");
const fahrenheitOutput = document.getElementById("fahrenheit");

convertBtn.addEventListener("click", function () {
  let celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9) / 5 + 32;

    fahrenheitOutput.value = fahrenheit.toFixed(2) + " °F";

    convertBtn.classList.add("converted");
  } else {
    alert("Please enter a valid temperature in Celsius.");
  }
});

convertBtn.addEventListener("mouseout", function () {
  convertBtn.classList.remove("hovered");
});

document.addEventListener("click", function (event) {
  if (!convertBtn.contains(event.target)) {
    convertBtn.classList.remove("hovered");
  }
});

convertBtn.addEventListener("mouseover", function () {
  convertBtn.classList.add("hovered");
});
