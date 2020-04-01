import axios from "axios";
import { addNotes, deleteNote } from "./actions";

export const putTask = task => async (dispath, getState) => {
  if (getState().token) {
    console.log("getState inner putTask", getState());
    const data = await axios.post(
      "https://authorization-3e689.firebaseio.com/tasks.json",
      task
    );
    console.log(data);
  } else {
    console.log("you cant put new note");
  }
};

export const getTask = () => async dispatch => {
  const data = await axios.get(
    "https://authorization-3e689.firebaseio.com/tasks.json"
  );

  console.log("all tasks", data);

  if (!data.data) {
    return dispatch(addNotes([]));
  }

  const transform = Object.keys(data.data)
    .map(key => ({
      ...data.data[key],
      id: key
    }))
    .reverse();
  console.log("transform", transform);

  dispatch(addNotes(transform));
};

export const delTask = id => async (dispatch, getState) => {
  console.log("-- ! --", getState());
  if (getState().token) {
    const del = await axios.delete(
      `https://authorization-3e689.firebaseio.com/tasks/${id}.json`
    );
    console.log("del", del);
    await dispatch(deleteNote(id));
  } else {
    console.log("you cant delete");
  }
};
