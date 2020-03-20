import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";
import { NotesContext } from "../../context/notes/notesContext";

const Form = () => {
  return (
    <NotesContext.Consumer>
      {context => {
        return (
          <div className={styles.container}>
            <form onSubmit={context.handleSubmit} noValidate autoComplete="off">
              <TextField
                className={styles.input}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="note"
              />
            </form>
          </div>
        );
      }}
    </NotesContext.Consumer>
  );
};

export default Form;
