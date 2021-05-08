const { readFile, appendUser, removeLast, removeCustom, modifyUser } = require('./crudOp')

console.clear()

appendUser()
console.log(process.argv)