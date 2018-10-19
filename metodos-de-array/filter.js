'use strict'

const array = [1, 2, 3, 4, 5]

const newArray = array.filter(item => item % 2 === 0)
console.log(newArray) // [2, 4]

// =============================================================

const otherNewArray = array.filter(item => item < 3)
console.log(otherNewArray) // [1, 2]

// =============================================================

const extensions = ['png', 'jpg']
const files = [
  { name: 'file1', extension: 'jpg' },
  { name: 'file2', extension: 'gif' },
  { name: 'file3', extension: 'doc' },
  { name: 'file4', extension: 'png' },
  { name: 'file5', extension: 'jpg' }
]

/*
// resultado esperado

[
  { name: 'file1', extension: 'jpg' },
  { name: 'file4', extension: 'png' },
  { name: 'file5', extension: 'jpg' }
]
*/

// solução 1
const newFiles = files.filter(file => {
  return extensions.indexOf(file.extension) > -1
})

console.log(newFiles)

// =============================================================

// solução 2
const newFiles2 = files.filter(file => {
  return extensions.includes(file.extension)
})

console.log(newFiles2)

// =============================================================

// solução 3
const newFiles3 = files.filter(file => {
  return extensions.some(extension => file.extension === extension)
})

console.log(newFiles3)
