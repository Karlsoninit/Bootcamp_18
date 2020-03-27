import React from "react";
import styles from "./list.module.css";
import { connect } from "react-redux";
import ListItem from "../listItems/ListItem";

//принимает notes и перебирает
const List = props => {
  console.log("props", props);
  return (
    <div className={styles.notesContainer}>
      {props.notes.map(note => (
        <ListItem key={note.id} data={note} />
      ))}
    </div>
  );
};

const mapSTP = state => {
  console.log(state);
  return {
    notes: state.notes
  };
};

export default connect(mapSTP)(List);
