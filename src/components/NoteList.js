import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/NotesContext";

function NoteList() {
  const { notes } = useContext(NotesContext);

  return notes.map((note) => (
    <Note key={note.title} note={note} />
  ));
}

export { NoteList as default };
