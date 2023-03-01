

function convertTemperature() {
  let temperature = document.getElementById("temperature").value;
  let toCelsius = document.getElementById("to-celsius").checked;
  let result;

  if (toCelsius) {
    result = (`${document.getElementById("temperature").value} Fahrenheit = ${(temperature - 32) * 5 / 9} Celsius `);
  } else {
    result = (`${document.getElementById("temperature").value} Celcius =${(temperature * 9 / 5) + 32 + " Fahrenheit"}`);
  }

  document.getElementById("result").innerHTML = result;
}


function toggleTheme() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-mode");

  let themeButton = document.getElementById("theme-button");
  if (body.classList.contains("dark-mode")) {
    themeButton.innerHTML = "Light Mode";
  } else {
    themeButton.innerHTML = "Dark Mode";
  }
}
