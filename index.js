/* eslint-disable no-extend-native */
const Numbers = {
  hundred: 2,
  thousand: 3,
  million: 6,
  billion: 9,
  trillion: 12,
  quadrillion: 15,
  quintillion: 18,
  sextillion: 21,
  septillion: 24,
  octillion: 27,
  nonillion: 30,
  decillion: 33
}

for (const number in Numbers) {
   Number.prototype[number] = function () {
    const result = this * Math.pow(10, Numbers[number])
    if (isNaN(result)) throw new Error('please pass a valid number')
    return result
  }
}
