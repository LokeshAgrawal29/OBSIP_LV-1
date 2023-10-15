document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertTemperature);
});

function convertTemperature() {
    const input = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;
    let resultValue = document.getElementById("resultValue");

    if (isNaN(input)) {
        resultValue.textContent = "Please enter a valid temperature.";
        resultValue.style.color = "red";
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (input * 9/5) + 32;
        resultValue.textContent = `${input}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === "fahrenheit") {
        const celsius = (input - 32) * 5/9;
        resultValue.textContent = `${input}°F is ${celsius.toFixed(2)}°C`;
    }

    resultValue.style.color = "black";
}
