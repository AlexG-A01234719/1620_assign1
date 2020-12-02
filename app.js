const notesArray = [
    {title: "", body: ""}
]

const cancel = document.getElementById('cancel');
const note = document.getElementsByTagName('note');
const new_note = document.getElementById('new_note');
const save = document.getElementById('save');
var text = document.getElementById('textbox')


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
    notesArray.unshift({title: text[0], body: text[1]})
    notesArray.pop()
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

