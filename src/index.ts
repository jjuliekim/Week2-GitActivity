import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_subtract = calc.subtract(2, 3);
console.log(`result_add = ${result_add}`);
console.log(`result_subtract = ${result_subtract}`);
