import React, { createContext, lazy, Suspense } from "react";
import { Spinner } from "./ui/spinner";

const NotesLazy = lazy(() =>
  import("./components/notes/Notes" /* webpackChunkName: "Notes"*/)
);

export const DefaultContext = createContext();

function App() {
  return (
    <Suspense fallback={<Spinner type="Grid" color="red" time={3000} />}>
      <DefaultContext.Provider
        value={{
          theme: "white"
        }}
      >
        <NotesLazy />
      </DefaultContext.Provider>
    </Suspense>
  );
}

export default App;
