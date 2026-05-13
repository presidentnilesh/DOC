const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

addBtn.addEventListener("click", createNote);

function createNote(text = ""){

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <button class="deleteBtn">X</button>
        <textarea placeholder="Write your note...">${text}</textarea>
    `;

    notesContainer.appendChild(note);

    const deleteBtn = note.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    const textarea = note.querySelector("textarea");

    textarea.addEventListener("input", saveNotes);

    saveNotes();
}

function saveNotes(){

    const notes = [];

    document.querySelectorAll(".note textarea").forEach(textarea => {
        notes.push(textarea.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes(){

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    savedNotes.forEach(note => createNote(note));
}

loadNotes();