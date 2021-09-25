const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;
let game = chalk.bold.yellow('\'How well do you know JavaScript?\'');

let name = readlineSync.question(chalk.bold('Hey, What\'s your good name? '));

while (name.length === 0) {
	name = readlineSync.question(chalk.bold('Hey, What\'s your good name? '));
}

console.log(`Welcome, ${name}! \n`);

console.log(`Let\'s play a game: ${game} \n`);



function askQuestion(ques, ans, i) {
	let userAns = readlineSync.question(chalk.bold(`${i}. ${ques}`));

	while (userAns.length === 0) {
		userAns = readlineSync.question(chalk.bold(`${i}. ${ques}`));
	}

	if (userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.greenBright('Correct! pat your back :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect need to work more :('));
		console.log(chalk.bold.greenBright(`The correct answer is ${ans}.`));
	}

	console.log(chalk.underline(`Score: ${score}\n`));
}

let quesList = [
	{
		q: 'A default behaviour of javascript where all the variable and function declarations are moved on top is called as?',
		a: 'Hoisting',
	},
	{
		q: 'An ability of a function to remember the variables and functions that are declared in its outer scope are called as? ',
		a: 'Closures',
	},
	{
		q: 'An advanced technique to transform a function of arguments n, to n functions of one or less arguments is called as? ',
		a: 'Currying',
	},
	{
		q: 'A function that will be executed after another function gets executed is called as? ',
		a: 'callback',
	},
	{
		q: 'A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result is called as? ',
		a: 'Recursion',
	},
	{
		q: 'DOM stands? ',
		a: 'Document Object Model',
	},
	{
		q: 'A new way to extract elements from an object or an arrayr? ',
		a: 'Object destructuring',
	},
	{
		q: 'A behaviour that occurs with variables declared using let and const keywords is known as? ',
		a: 'Temporal Dead Zone',
	},
	{
		q: 'Small units of independent, reusable code and also act as the foundation of many JavaScript design patterns are called as? ',
		a: 'Modules',
	},
	{
		q: 'The accessibility of variables, functions, and objects in some particular part of your code during runtime is called as? ',
		a: 'Scope',
	},
	
];

for (let i = 0; i < quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"], i + 1);
}



if (score >= 8) {
	console.log(chalk.underline.italic.bold.greenBright(`Your final score is ${score} Congratulations! You are awesome at JavaScript :)`));
} else if (score <= 4) {
	console.log(chalk.underline.italic.bold.greenBright(`Your final score is ${score} Don't worry read mdn docs or watch Namaste JavaScript  or Javascript.info :):)`));
} else {
	console.log(chalk.underline.italic.bold.greenBright(`Your final score is ${score} points! You're really cool just need brushup some points :)`));
}