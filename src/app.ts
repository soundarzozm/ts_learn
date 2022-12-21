// Using generic
const addUID = <T extends { name: string }>(obj: T) => {
	let uid = Math.floor(Math.random() * 100)
	return { ...obj, uid }
}

let docOne = addUID({ name: 'yoshi', age: 40 })
console.log(docOne.name)

// Works but should not be the case. Only objects should be allowed
// <T extends object> solves this.
// let docTwo = addUID('hello')

enum resourceType {
	BOOK,
	AUTHOR,
	FILM,
	ARTIST,
}

interface Resource<T> {
	uid: number
	resourceName: string
	resourceType: resourceType
	data: T // This can be any datatype
}

const docThree: Resource<object> = {
	uid: 1,
	resourceName: 'person',
	resourceType: resourceType.BOOK,
	data: {
		name: 'shaun',
	},
}

const docFour: Resource<string[]> = {
	uid: 2,
	resourceName: 'hello',
	resourceType: resourceType.ARTIST,
	data: ['hello', 'world'],
}

console.log(docFour)
