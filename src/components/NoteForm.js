import React, { useContext, useState } from "react";
import NotesContext from "../context/NotesContext";

function NoteForm() {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([...notes, {title}])
    const note = { title };
    dispatch({ type: "ADD_NOTE", note });
    setTitle("");
  };

  return (
    <form onSubmit={addNote}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add note</button>
    </form>
  );
}

export { NoteForm as default };
