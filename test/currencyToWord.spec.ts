import { currencyToWord } from "../src/currencyToWord";

// Test decimal
console.log(currencyToWord(0.5, 'USD'));
console.log(currencyToWord(1.99, 'USD'));
console.log(currencyToWord(100_231.15, 'USD'));
console.log(currencyToWord(1230, 'USD'));

console.log(currencyToWord(150_200, 'KHR'));
console.log(currencyToWord(2100, 'KHR'));
console.log(currencyToWord(1_000_200, 'KHR'));
console.log(currencyToWord(100.02, 'KHR'));

