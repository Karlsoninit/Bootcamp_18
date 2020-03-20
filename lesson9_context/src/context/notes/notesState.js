import React, { Component } from "react";
import { NotesContext } from "./notesContext";

export class NotesState extends Component {
  state = {
    notes: []
  };

  getNoteInfo = e => {
    e.preventDefault();
    const note = e.target.elements[0].value;
    this.setState(prevState => ({
      notes: [...prevState.notes, { note }]
    }));
  };

  render() {
    console.log("this.props", this.props);
    const { children, theme } = this.props;
    const { notes } = this.state;
    return (
      <NotesContext.Provider
        value={{
          notes,
          handleSubmit: this.getNoteInfo,
          theme
        }}
      >
        {children}
      </NotesContext.Provider>
    );
  }
}
