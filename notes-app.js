'use strict';

const notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited"
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click",  (e) => {
  const timestamp = moment().valueOf();
  notes.push({
    id:uuidv4(),
    title: "",
    body: "",
    createAt: timestamp,
    updateAt: timestamp
  });
  saveNotes(notes)
  location.assign(`/edit.html#${notes[notes.length-1].id}`)
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', (e) =>{
  if(e.key === 'notes'){
    notes === JSON.parse(e.newValue)
    renderNotes(notes, filters)
  } 
})

