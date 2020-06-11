const validator = require('validator')
const notes = require('./notes.js')

console.log(notes())

console.log(validator.isEmail('abijithajithyahoo.com'))