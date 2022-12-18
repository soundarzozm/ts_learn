import { Invoice } from './classes/invoice.js'

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
