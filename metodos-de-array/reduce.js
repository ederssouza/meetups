'use strict'

const array = [1, 2, 3, 4, 5]

// somar todos os numeros = 15
// .reduce(func(acc, item), dataType)
const summAllNumbers = array.reduce((acumulado, item) => {
  return acumulado + item
}, 0)

console.log('summAllNumbers', summAllNumbers) // 15

// =============================================================

const newObject = array.reduce((acumulado, item) => {
  acumulado[item] = { id: item }
  return acumulado
}, {})

console.log('newObject', newObject)
// { '1': { id: 1 },
//   '2': { id: 2 },
//   '3': { id: 3 },
//   '4': { id: 4 },
//   '5': { id: 5 } }

// =============================================================

// com imutabilidade
const newObject2 = array.reduce((acumulado, item) => {
  return {
    ...acumulado,
    [item]: { id: item }
  }
}, {})

console.log('newObject2', newObject2)
// { '1': { id: 1 },
//   '2': { id: 2 },
//   '3': { id: 3 },
//   '4': { id: 4 },
//   '5': { id: 5 } }

// =============================================================

const newArray = array.reduce((acumulado, item) => {
  acumulado.push(item + 1)
  return acumulado
}, [])

console.log('newArray', newArray) // [ 2, 3, 4, 5, 6 ]

// =============================================================

// com imutabilidade
const newArray2 = array.reduce((acumulado, item) => {
  return [
    ...acumulado,
    item + 1
  ]
}, [])

console.log('newArray2', newArray2) // [ 2, 3, 4, 5, 6 ]
