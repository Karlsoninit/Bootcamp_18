import React, { Component, createContext } from "react";
import Form from "../form/Form";
import List from "../list/List";
import { DefaultContext } from "../../App";

export const NotesContext = createContext();
export const WishesContext = createContext();

class Notes extends Component {
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
    console.log("re-re-nder");
    const { notes } = this.state;
    return (
      <DefaultContext.Consumer>
        {defContext => {
          console.log("defContext", defContext);
          return (
            <>
              <NotesContext.Provider
                value={{
                  notes,
                  handleSubmit: this.getNoteInfo,
                  theme: defContext.theme
                }}
              >
                <Form />
                <List />
              </NotesContext.Provider>
            </>
          );
        }}
      </DefaultContext.Consumer>
    );
  }
}

export default Notes;
