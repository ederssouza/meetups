'use strict'

const array = [1, 2, 3, 4, 5]
const allAreNumbers = array.every(item => typeof item === 'number')
console.log(allAreNumbers)
