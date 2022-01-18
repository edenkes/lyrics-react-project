import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import PropTypes from "prop-types";


function Note({ note }) {

  const { dispatch } = useContext(NotesContext);

  const deleteNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <h4>Paragraph: </h4>
      <p>{note.paragraph}</p>
      <textarea
        value={note.paragraph}
        onChange={(e) => {
          note.paragraph = e.target.value;
        }}
      />
      <button onClick={() => deleteNote(note.title)}>X</button>
    </div>
  );
}

Note.propTypes = {
    note: PropTypes.object,
};
export { Note as default };
