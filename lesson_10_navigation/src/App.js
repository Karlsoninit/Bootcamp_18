import React from "react";
import styles from "./app.module.css";
import NotesState from "./context/notes/notesState";
import Form from "./components/Form";
import AnimationNotesList from "./components/AnimationNotesList";

const App = () => (
  <NotesState>
    <Form />
    <AnimationNotesList />
  </NotesState>
);

export default App;
