import React from "react";
import { Link, Route } from "react-router-dom";
const ContentPage = props => {
  console.log(props);
  return (
    <>
      <h2>{props.location.state}</h2>
      {/* <Link
        to={{
          pathname: `/home/:${this.props.match.params.id}/content`,
          state: "ha-ha"
        }}
      >
        Content
      </Link>
      <Route
        exact
        path={`/home/:${this.props.match.params.id}/content`}
        component={ContentPage}
      /> */}
    </>
  );
};

export default ContentPage;
