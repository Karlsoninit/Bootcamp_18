import types from "./types";

// export const notes = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_NOTE:
//       return [...state, payload];
//     case types.DELETE_NOTE:
//       return state.filter(note => note.id !== payload);
//     default:
//       return state;
//   }
// };

export const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.ADD_NOTE:
      return "await token ...";
    default:
      return state;
  }
};

const handlers = {
  [types.ADD_NOTE]: (state, { payload }) => {
    console.log("payload", payload);
    return payload;
  },
  [types.DELETE_NOTE]: (state, { payload }) =>
    state.filter(note => note.id !== payload),
  DEFAULT: state => state
};

export const notes = (state = [], actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};
