import React from "react";
import styles from "./list.module.css";
import { connect } from "react-redux";
import ListItem from "../listItems/listItemContainer";
import { getNotes } from "../../redux/selectors";
//принимает notes и перебирает
const List = props => {
  return (
    <div className={styles.notesContainer}>
      {props.notes.map(note => (
        <ListItem key={note.id} data={note} />
      ))}
    </div>
  );
};

const mapSTP = state => {
  return {
    notes: getNotes(state)
  };
};

export default connect(mapSTP)(List);
