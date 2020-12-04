const notesArray = [
    {title: "", body: ""}
]

const cancel = document.getElementById('cancel');
const note = document.getElementsByTagName('note');
const new_note = document.getElementById('new_note');
const save = document.getElementById('save');
const notesList = document.querySelector('#notes_list');
const lightTheme = document.querySelector('#light_theme');
var text = document.getElementById('textbox');


lightTheme.addEventListener("click", function() {
    const body = document.querySelector('body')
    const header = document.querySelector('.header')
    const footer = document.querySelector('.footer')
    const noteMenu = document.querySelector('.menu')
    const noteSection = document.querySelector('.note')
    const blankArea = document.querySelector('.blank')
    const textbox = document.querySelector('textarea')

    body.classList.toggle("body_light")
    header.classList.toggle("header_light")
    footer.classList.toggle("footer_light")
    noteMenu.classList.toggle("menu_light")
    noteSection.classList.toggle("note_light")
    blankArea.classList.toggle("blank_light")
    textbox.classList.toggle("textarea_light")
})


cancel.addEventListener("click", function() {
    document.getElementById('save').style.visibility = 'collapse';
    document.getElementById('cancel').style.visibility = 'collapse';
    document.getElementById('textbox').style.visibility = 'collapse';
})

new_note.addEventListener("click", function() {
    document.getElementById('save').style.visibility = 'visible';
    document.getElementById('cancel').style.visibility = 'visible';
    document.getElementById('textbox').style.visibility = 'visible';
    text.value = "";
})

save.addEventListener("click", function() {
    var text = document.getElementById('textbox').value.split('\n');
    let empty = {}
    empty.title = text[0]
    empty.body = ""
    for (let i = 1; i < text.length; i++) {
        empty.body += `${text[i]}\n`
    }
    notesArray.unshift(empty)
    if (notesArray.title === undefined) {
        notesArray.pop()
    }
    createNoteList(notesArray)
    createNoteContent(notesArray)
})

function createNoteList(note_list) {
    const notes = document.querySelector('#notes_list')
    notes.innerHTML = ""
    const noteName = `
        <ul>
            ${note_list.map(i => `<li>${i.title}</li>`).join('\n')}
        </ul>
    `
    notes.insertAdjacentHTML('afterbegin', noteName)
}

function createNoteContent(note_list) {
    const noteText = document.querySelector('#textbox').value
    const formattedNoteList = noteText.replace(/\n/, '|||').split('|||')
    note_list.push({...formattedNoteList})
    console.log(note_list)
}

notesList.addEventListener("click", (e) => {
    const note = notesArray.map(element => element.title == e.target.innerText)
    for (i of note)
        if (i == true) {
        const correctNote = [notesArray[note.indexOf(true)]]
        document.getElementById('textbox').value = `${correctNote[0].title}\n`
        document.getElementById('textbox').value += `${correctNote[0].body}`
        console.log(correctNote)
    }
})