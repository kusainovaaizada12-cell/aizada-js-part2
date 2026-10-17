console.log('--- Task 6 ---');

const fullName = 'Kussainova Aizada';
let age = 19;
const isStudent = true;
const favoriteColor = 'blue';

console.log('Full Name:', fullName, '| typeof:', typeof fullName);
console.log('Age:', age, '| typeof:', typeof age);
console.log('Is Student:', isStudent, '| typeof:', typeof isStudent);
console.log('Favorite Color:', favoriteColor, '| typeof:', typeof favoriteColor);

age = 20; 
console.log('New age:', age);

console.log('--- Task 7 ---');

const userName = prompt('What is your name?');
alert('Hello, ' + userName + '!');

const group = 'MT2503';
console.log(`Hi! I am ${userName} from group ${group}.`);

console.log('--- Task 8 ---');

const num1 = Number(prompt('Enter the first number:'));
const num2 = Number(prompt('Enter the second number (not 0):'));

console.log('Sum:', num1 + num2);
console.log('Difference:', num1 - num2);
console.log('Product:', num1 * num2);
console.log('Quotient:', num1 / num2);
console.log('Remainder:', num1 % num2);

console.log('"12" + "5" =', '12' + '5');
console.log('Number("12") + Number("5") =', Number('12') + Number('5'));

console.log('--- Task 9 ---');

const myName = 'Kussainova Aizada';

console.log('Length:', myName.length);
console.log('Uppercase:', myName.toUpperCase());
console.log('Lowercase:', myName.toLowerCase());
console.log('First three characters:', myName.slice(0, 3));

const part1 = 'I am a second-year student';
const part2 = 'at Astana IT University';
console.log(part1 + ' ' + part2 + '.');

console.log('--- Task 10 ---');

let counter = 10;
console.log('Start:', counter);

counter++;
console.log('After ++ :', counter);

counter--;
console.log('After -- :', counter);

counter += 5;
console.log('After += 5:', counter);

counter -= 3;
console.log('After -= 3:', counter);

counter *= 2;
console.log('After *= 2:', counter);

counter /= 4;
console.log('After /= 4:', counter);

console.log('--- Task 11 ---');

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log(`A dog aged ${dogAge} is ${humanAge} in human years.`);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log(`A dog aged ${dogAge} is ${humanAge} in human years.`);

console.log('--- Task 12 ---');

function greetUser(name) {
  console.log('Hello, ' + name + '!');
}

function calculateSum(a, b) {
  return a + b;
}

function calculateRectangleArea(width, height) {
  return width * height;
}

greetUser('Aizada');
greetUser('Elnura');

console.log('Sum of 3 and 4:', calculateSum(3, 4));
console.log('Sum of 10 and 25:', calculateSum(10, 25));

console.log('Area 5 x 8:', calculateRectangleArea(5, 8));
console.log('Area 2.5 x 4:', calculateRectangleArea(6, 3));