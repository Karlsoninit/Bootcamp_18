import React, { createContext } from "react";
import Notes from "./components/notes/Notes";

export const DefaultContext = createContext();

function App() {
  return (
    <DefaultContext.Provider
      value={{
        theme: "dark"
      }}
    >
      <Notes />
    </DefaultContext.Provider>
  );
}

export default App;
