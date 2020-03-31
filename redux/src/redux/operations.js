import axios from "axios";
import { addNotes, deleteNote } from "./actions";

export const putTask = task => async () => {
  const data = await axios.post(
    "https://authorization-3e689.firebaseio.com/tasks.json",
    task
  );
  console.log(data);
};

export const getTask = () => async dispatch => {
  const data = await axios.get(
    "https://authorization-3e689.firebaseio.com/tasks.json"
  );

  console.log("all tasks", data);
  const transform = Object.keys(data.data)
    .map(key => ({
      ...data.data[key],
      id: key
    }))
    .reverse();
  console.log("transform", transform);
  dispatch(addNotes(transform));
};

export const delTask = id => async dispatch => {
  const del = await axios.delete(
    `https://authorization-3e689.firebaseio.com/tasks/${id}.json`
  );
  console.log("del", del);
  await dispatch(deleteNote(id));
};
