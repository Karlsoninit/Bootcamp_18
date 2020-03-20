import React from "react";
import Form from "../form/Form";
import List from "../list/List";
import { DefaultContext } from "../../App";
import { NotesState } from "../../context/notes/notesState";

const Notes = () => (
  <DefaultContext.Consumer>
    {({ theme }) => {
      return (
        <>
          <NotesState theme={theme}>
            <Form />
            <List />
          </NotesState>
        </>
      );
    }}
  </DefaultContext.Consumer>
);

export default Notes;
