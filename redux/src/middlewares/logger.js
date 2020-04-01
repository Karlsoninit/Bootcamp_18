export const logger = state => next => action => {
  // console.log("next", next);
  // console.log("action", action);
  //   if (!action.payload.note.length < 5) {
  //     next(action);
  //   } else {
  //     console.log("меньше ");
  //   }

  //   if (action) {
  //     console.log("test", action.payload.note);
  //   }

  if (action.type === "DELETE_NOTE") {
    console.log("state", state.getState().token);
    // if (state.getState().token) {
    // }
    if (state.getState().token) {
      next(action);
    } else {
      console.log("you cant delete");
      return;
    }
  }
  next(action);
};
