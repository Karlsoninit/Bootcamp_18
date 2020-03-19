import React from "react";
import styles from "./list.module.css";
import ListItem from "../listItems/ListItem";
import { NotesContext } from "../notes/Notes";
//принимает notes и перебирает

const List = () => (
  <NotesContext.Consumer>
    {context => {
      console.log("context in List ", context);
      return (
        <div className={styles.notesContainer}>
          {context.notes.map(note => {
            console.log("note ", note);
            return <ListItem data={note} />;
          })}
        </div>
      );
    }}
  </NotesContext.Consumer>
);

export default List;
