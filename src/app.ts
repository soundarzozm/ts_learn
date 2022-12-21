import { Invoice } from './classes/invoice.js'

interface isPerson {
	name: string
	age: number
	speak(a: string): void
	spend(a: number): number
}

const me: isPerson = {
	name: 'mario',
	age: 20,
	speak(text: string): void {
		console.log(text)
	},
	spend(amount: number): number {
		console.log('I spent', amount)
		return amount
	},
}

console.log(me)

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invTwo.amount = 400

invoices.forEach((inv) => {
	console.log(inv.format())
	console.log(inv.client)
})
