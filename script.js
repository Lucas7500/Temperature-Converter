document
  .getElementById("convertCelsius")
  .addEventListener("click", celsiusToFahrenheit)

document
  .getElementById("convertFahrenheit")
  .addEventListener("click", fahrenheitToCelsius)

function celsiusToFahrenheit() {
  let celsius = document.getElementById("celsiusDegree").value
  let result = document.getElementById("resultInFahrenheit")
  let resultCalculation = convertCelsiusToFahrenheit(celsius)

  result.innerText = resultCalculation.toFixed(2) + "°F"
}

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function fahrenheitToCelsius() {
  let fahrenheit = document.getElementById("fahrenheitDegree").value
  let result = document.getElementById("resultInCelsius")
  let resultCalculation = convertFahrenheitToCelsius(fahrenheit)

  result.innerText = resultCalculation.toFixed(2) + "°C"
}

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}
