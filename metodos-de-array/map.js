'use strict'

/**
 * funções são cidadãos de primeira classe
 * (fazem o mesmo que objetos)
 */

function transform (arr, func) {
  let newArr = []

  for (let i = 0; i < array.length; i++) {
    newArr.push(func(array[i]))
  }

  return newArr
}

const array = [1, 2, 3]

// utilizando a função transform()
const newArr = transform(array, (item) => ({ id: item }))
console.log(newArr) // [ { id: 1 }, { id: 2 }, { id: 3 } ]

// =============================================================

const newArr2 = transform(array, (item) => item + 1)
console.log(newArr2) // [ 2, 3, 4 ]

// =============================================================

// utilizando o método .map()
const newArrMap = array.map(item => ({ id: item }))
console.log(newArrMap) // [ { id: 1 }, { id: 2 }, { id: 3 } ]

// =============================================================

const newArr2Map = array.map((item) => item + 1)
console.log(newArr2Map) // [ 2, 3, 4 ]
