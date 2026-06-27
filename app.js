const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")

// Customize yarg version
yargs.version("1.1.0")


// Yargs commands
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("Adding a new note")
    }
})

console.log(yargs.argv)