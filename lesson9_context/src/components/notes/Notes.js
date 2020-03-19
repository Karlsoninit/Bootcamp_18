import React, { Component, createContext } from "react";
import Form from "../form/Form";
import List from "../list/List";

export const NotesContext = createContext();

class Notes extends Component {
  state = {
    notes: []
  };

  getNoteInfo = note => {
    console.log(note);

    this.setState(prevState => ({
      notes: [...prevState.notes, note]
    }));
    // принимает note и пушит в массив notes
  };

  render() {
    console.log("re-re-nder");
    const { notes } = this.state;
    return (
      <>
        <NotesContext.Provider
          value={{
            theme: "dark",
            notes
          }}
        >
          <Form onGetNoteInfo={this.getNoteInfo} />
          <List />
        </NotesContext.Provider>
      </>
    );
  }
}

export default Notes;
