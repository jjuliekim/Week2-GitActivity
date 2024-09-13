import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_subtract = calc.subtract(2, 3);
console.log(`result_add = ${result_add}`);
console.log(`result_subtract = ${result_subtract}`);
const result_divide = calc.divide(6, 9);
const result_divide_zero = calc.divide(2, 0);
console.log(`result_divide = ${result_divide}`);
console.log(`result_divide_zero = ${result_divide_zero}`)
calc.hello()