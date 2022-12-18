// This is function signature
let greet: (a: string, b: string) => void

// This is actual function definition
// Note that the parameter names are different (but the types should be matching)
greet = (name: string, greeting: string): void => {
	console.log(`${name}: ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number
calc = (numOne: number, numTwo: number, action: string): number => {
	if (action === 'add') {
		return numOne + numTwo
	} else {
		return numOne - numTwo
	}
}

let logDetails: (obj: { name: string; age: number }) => void
logDetails = (ninja: { name: string; age: number }) => {
	console.log(`${ninja.name} is ${ninja.age} years old`)
}
