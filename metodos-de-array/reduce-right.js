'use strict'

const array = [1, 2, 3, 4, 5]

const newArray = array.reduceRight((acumulado, item) => {
  acumulado.push(item + 1)
  return acumulado
}, [])

console.log('newArray', newArray) // [ 6, 5, 4, 3, 2 ]
