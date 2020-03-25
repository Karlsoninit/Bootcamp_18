import React from "react";
import { NotesContext } from "../context/notes/notesContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./animationNotesList.module.css";
const AnimationNotesList = () => (
  <NotesContext.Consumer>
    {({ notes, deleteItem }) => {
      console.log(notes);
      return (
        <TransitionGroup>
          {notes.map(note => {
            console.log("note", note);
            return (
              <CSSTransition
                key={note.query}
                timeout={2000}
                classNames={styles}
              >
                <div>
                  <h2>{note.query}</h2>
                  <button onClick={() => deleteItem(note.query)}>Delete</button>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      );
    }}
  </NotesContext.Consumer>
);

export default AnimationNotesList;
