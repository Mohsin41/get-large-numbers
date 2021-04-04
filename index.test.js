/* eslint-disable no-undef */
require('./')

it('should return number 100 ', () => {
  const result = Number(1).hundred()
  expect(result).toEqual(100)
})

it('should return number 1000 ', () => {
  const result = Number(1).thousand()
  expect(result).toEqual(1000)
})

it('should return number 1000000 ', () => {
  const result = Number(1).million()
  expect(result).toEqual(1000000)
})

it('should return 1500000 by chaining methods', () => {
  const result = (15).thousand().hundred()
  expect(result).toEqual(1500000)
})

it('should return error ', () => {
  const result = () => Number('s').decillion()
  expect(result).toThrow('please pass a valid number')
})

it('should return number 10500000000 ', () => {
  const result = Number(10.5).billion()
  expect(result).toEqual(10500000000)
})

it('should return number 1650000000000 ', () => {
  const result = Number(1.65).trillion()
  expect(result).toEqual(1650000000000)
})

it('should return number 16200000000000000 ', () => {
  const result = Number(16.2).quadrillion()
  expect(result).toEqual(16200000000000000)
})

it('should return number 4090000000000000000 ', () => {
  const result = Number(4.09).quintillion()
  expect(result).toEqual(4090000000000000000)
})

it('should return number 9.99e+21 ', () => {
  const result = Number(9.99).sextillion()
  expect(result).toEqual(9.99e21)
})

it('should return number 2.5e+27 ', () => {
  const result = Number(2.5).octillion()
  expect(result).toEqual(2.5e27)
})

it('should return number 4e+30 ', () => {
  const result = Number(4).nonillion()
  expect(result).toEqual(4e30)
})

it('should return number 5e+23 ', () => {
  const result = Number(0.5).septillion()
  expect(result).toEqual(5e23)
})

it('should return number 1e+38 ', () => {
  const result = Number(100000).decillion()
  expect(result).toEqual(1e38)
})

it('should return 1500000 by chaining methods', () => {
  const result = (15).thousand().hundred()
  expect(result).toEqual(1500000)
})
