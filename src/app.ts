import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// Just making sure type is matching
let docOne: HasFormatter
let docTwo: HasFormatter

// Both follow same interface so no problem
docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 200)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

// Not allowed
// docs.push(20)

console.log(docs)

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
	e.preventDefault()

	let doc: HasFormatter
	if (type.value === 'invoice') {
		doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
	} else {
		doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
	}
	console.log(doc)
})
