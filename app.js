const validator = require("validator").default
const notes = require("./notes")


const msg = notes();
console.log(msg)

console.log(validator.isEmail("josh.genereux@gmail"))