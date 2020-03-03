import React from "react";
import List from "./list/List";

const ps = [
  {
    title: "playstation one",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXsCpS5OwZBc%2Fmaxresdefault.jpg&f=1&nofb=1",
    warranty: {
      date: "20:15",
      year: 2,
      conrl: 1
    }
  },
  {
    title: "playstation two",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FiGJd6SKK-x8%2Fhqdefault.jpg&f=1&nofb=1",
    warranty: {
      date: "20:17",
      year: 2,
      conrl: 1
    }
  },
  {
    title: "playstation three",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.arstechnica.net%2Fwp-content%2Fuploads%2F2009%2F03%2F640-ps3-horz.jpg&f=1&nofb=1",
    warranty: {
      date: "20:19",
      year: 3,
      conrl: 2
    }
  }
];

const App = () =>
  ps.length ? (
    ps.map(ps => <List key={ps.title} ps={ps} />)
  ) : (
    <h2>not found ....</h2>
  );

export default App;
