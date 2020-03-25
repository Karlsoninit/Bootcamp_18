import React, { Component } from "react";
import { NotesContext } from "./notesContext";

class NotesState extends Component {
  state = {
    notes: []
  };

  getNote = note => {
    this.setState(prev => ({
      notes: [...prev.notes, note]
    }));
  };

  deleteItem = id => {
    console.log("id", id);
    this.setState(prev => ({
      notes: prev.notes.filter(note => note.query !== id)
    }));
  };

  render() {
    const { notes } = this.state;
    return (
      <NotesContext.Provider
        value={{
          notes,
          getNote: this.getNote,
          deleteItem: this.deleteItem
        }}
      >
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}

export default NotesState;
