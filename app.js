let notesArray = [
    {title:"", body:""},
]

const cancel = document.getElementById('cancel');
const note = document.getElementsByTagName('note');
const new_note = document.getElementById('new_note');
const save = document.getElementById('save');
var text = document.getElementById('textbox')
var ul = 


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
    notesArray.length = 10
    console.log(notesArray)
})