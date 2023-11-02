const input = document.getElementById("title");
const addBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [];

function render() {
  listElement.innerHTML = ''
  if(notes.length===0){
    listElement.innerHTML = `<p style="text-align: center; background-color:white; color:black;border-radius:5px">Заметок нет</p>`
  }
  for (let i = 0; i < notes.length; i++){
    listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i], i))
  }
}
render();

addBtn.onclick = function () {
  if (input.value.length === 0) {
    return;
  }
  const newNote = {
    title: input.value,
    completed: false
  }  
  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  notes.push(newNote)
  render()
  input.value = "";
};

listElement.onclick = function(event){
  if(event.target.dataset.index){
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if(type==='toggle') {
      notes[index].completed = !notes[index].completed
    } else if (type ==='remove'){
      notes.splice(index,1)
    }
    render()
  }
}


function getNoteTemplate(note,index) {
  return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="${note.completed ? 'text-decoration-line-through':''}">${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
  </li>`;
}

