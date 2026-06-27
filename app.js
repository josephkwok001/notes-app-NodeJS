const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require('./notes.js')

// Customize yarg version
yargs.version("1.1.0")


// Creat add commands
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }    
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})


// Create List command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler () {
        console.log("Listing out all notes")
    }
})


// Create Read command
yargs.command({
    command: "Read",
    describe: "Read a note",
    handler () {
        console.log("Reading a note")
    }
})


yargs.parse()