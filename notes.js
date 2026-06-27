const fs = require("fs")
const chalk = require("chalk")
myNotes = "Science is ...."


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep) 
        console.log(chalk.green.inverse("Note " + title + " removed"))
    } else {
        console.log(chalk.bgRed("No note with " + title + " found"))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))

    notes.forEach( (note) => {
        console.log(note.title)
    })
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const read = notes.find(note => note.title === title)

    if (read) {
        console.log(chalk.green.inverse(read.title))
        console.log(chalk.green.inverse(read.body))
    } else {
        console.log(chalk.red.inverse("Note does not exists"))
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNote: readNote
}