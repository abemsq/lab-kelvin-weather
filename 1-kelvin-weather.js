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