const yargs = require('yargs')

// Customize yargs version


// Create add command
yargs.command({
	command: 'add',
	describe: 'Adds two number',
	builder: {
		firstNumber: {
			describe: 'First Number',
			demandOption: true, // Required
			type: 'number'	
		},
		secondNumber: {
			describe: 'Second Number',
			demandOption: true,
			type: 'number'
		},
		thirdNumber: {
			describe: 'third Number',
			demandOption: true,
			type: 'number'
		}
	},

	// Function for your command
	handler(argv) {
		console.log("Result:",
			(argv.firstNumber+argv.secondNumber+argv.thirdNumber))
	}
},
{
	command: 'sub',
	describe: 'Adds two number',
	builder: {
		firstNumber1: {
			describe: 'First Number',
			demandOption: true, // Required
			type: 'number'	
		},
		secondNumber2: {
			describe: 'Second Number',
			demandOption: true,
			type: 'number'
		},
		thirdNumber3: {
			describe: 'third Number',
			demandOption: true,
			type: 'number'
		}
	},

	// Function for your command
	handler(argv) {
		console.log("Result:",
			(argv.firstNumber1-argv.secondNumber2-argv.thirdNumber3))
	}
})

yargs.parse() // To set above changes
