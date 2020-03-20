import React from "react";
import styles from "./list.module.css";
// import ListItem from "../listItems/ListItem";
import { Spinner } from "../../ui/spinner";
import { NotesContext } from "../../context/notes/notesContext";
//принимает notes и перебирает

const ListItemLazy = React.lazy(() => import("../listItems/ListItem"));

const List = () => (
  <NotesContext.Consumer>
    {context => {
      console.log("context", context);
      return (
        <div className={styles.notesContainer}>
          {context.notes.map(note => {
            return (
              <React.Suspense
                fallback={<Spinner type="Rings" color="green" time={3000} />}
              >
                <ListItemLazy data={note} theme={context.theme} />
              </React.Suspense>
            );
          })}
        </div>
      );
    }}
  </NotesContext.Consumer>
);

export default List;
