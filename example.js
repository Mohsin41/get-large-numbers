require('./index.js')

// hundered method with any given number (e.g:10)
const number1 = (10).hundred()
console.log(number1)

// thousand method with any given number (e.g:-15)
const number2 = Number(-15).thousand()
console.log(number2)

// methods can be chained but currently dont accept any parameter below will return 1500000
const number22 = Number(15).thousand().hundred()
console.log(number22)

// million  method example with any given number (e.g:100)
const number3 = (100).million()
console.log(number3)

// billion  method example with any given number (e.g:10.5)
const number4 = Number(10.5).billion()
console.log(number4)

// trillion  method with any given number (e.g:1.65)
const number5 = Number(1.65).trillion()
console.log(number5)

// quadrillion  method with any given number (e.g:16.2)
const number6 = Number(16.2).quadrillion()
console.log(number6)

// sextillion  method with any given number (e.g:9.99)
const number7 = Number(9.99).sextillion()
console.log(number7)

// quintillion method with any given number (e.g:4.09)
const number8 = Number(4.09).quintillion()
console.log(number8)

// septillion  method with any given number (e.g:0.5)
const number9 = Number(0.5).septillion()
console.log(number9)

// octillion  method with any given number (e.g:2.5)
const number10 = Number(2.5).octillion()
console.log(number10)

// nonillion  method with any given number (e.g:4)
const number11 = Number(4).nonillion()
console.log(number11)

// decillion  method with any given number (e.g:100000)
const number12 = Number(100000).decillion()
console.log(number12)

// Random Number
const randomNumber = Number(Math.random()).million()
console.log(randomNumber)
