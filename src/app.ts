// classes
class Invoice {
	// Public is default
	// readonly client: string
	// private details: string
	// public amount: number

	// constructor(c: string, d: string, a: number) {
	// 	this.client = c
	// 	this.details = d
	// 	this.amount = a
	// }

	// Quick way to do all this
	constructor(
		// Modifiers are compulsory for this
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owes $${this.amount} for ${this.details}`
	}
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

// Read-only so not changeable
// invOne.client = 'yoshi'
invTwo.amount = 400

invoices.forEach((inv) => {
	console.log(inv.format())

	// Private so inaccessible
	// console.log(inv.details)

	// Readable
	console.log(inv.client)
})
