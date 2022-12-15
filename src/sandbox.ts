let greet: Function

greet = () => {
	console.log('hello, again')
}

const add = (
	a: number,
	b: number,
	c: number | string = 10,
	d?: number | string
) => {
	console.log(a + b)
	console.log(c)
	console.log(d)
}

add(5, 10)

const minus = (a: number, b: number): number => {
	return a - b
}

let result = minus(10, 7)
