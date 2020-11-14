# Javascript Conditional Syntax: Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F

```
let kelvin = 0;
// constant value of Kelvin.
let celsius = kelvin - 273;

// constant value of Celcius.
let farenheit = celsius * (9 / 5) + 32;

// constant value of Farenheit.
farenheit = Math.floor(farenheit);

// rounds Farenheit to whole number.
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
```

![Tux, the Linux mascot](https://content.codecademy.com/projects/introduction-to-javascript/learn-javascript-introduction/kelvin-weather/Kelvin%20Thermometers.svg)
