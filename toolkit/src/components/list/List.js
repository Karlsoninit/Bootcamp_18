import React from "react";
import styles from "./list.module.css";
import { connect } from "react-redux";
import ListItem from "../listItems/ListItem";
//принимает notes и перебирает
const List = ({ notes }) => (
  <div className={styles.notesContainer}>
    {notes.map(note => (
      <ListItem key={note.note} data={note} />
    ))}
  </div>
);

const mapSTP = state => ({
  notes: state.notes.notes
});

export default connect(mapSTP)(List);
