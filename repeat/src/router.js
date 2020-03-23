import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Story from "./pages/Story";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

// const RouterPage = props => {
//   console.log("RouterPage props", props);
//   return (
//     <Switch>
//       {/* <Route
//         exact
//         path="/"
//         render={props => {
//           return <Home {...props} word={word} />;
//         }}
//       /> */}
//       <Route exact path="/" component={Home}>
//         <Home {...props} />
//       </Route>
//       <Route exact path="/story" component={Story} />
//       <Route exact path="/login" component={LoginPage} />
//       <Route exact path="/register" component={RegisterPage} />
//       <Route component={NotFoundPage} />
//     </Switch>
//   );
// };

// export default RouterPage;

// privat router

export const useRouter = isAuth => {
  if (isAuth) {
    return <Route exact path="/" component={Home} />;
  }

  return (
    <>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </>
  );
};
