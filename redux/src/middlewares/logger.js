export const logger = state => next => action => {
  console.log("state", state.getState());
  console.log("next", next);
  console.log("action", action);
  //   if (!action.payload.note.length < 5) {
  //     next(action);
  //   } else {
  //     console.log("меньше ");
  //   }

  //   if (action) {
  //     console.log("test", action.payload.note);
  //   }

  next(action);
};
