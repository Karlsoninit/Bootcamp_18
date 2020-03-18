import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Loadable from "react-loadable";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

// /* webpackChunkName: 'Login' */
import NewsPage from "./pages/NewsPage";
// import Loading from "./ui/Loader";
const test = "work";

const LazyLogin = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: 'Login' */)
);
const LazyRegister = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: 'Register' */)
);

export const useRouter = isAuthentication => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route exact path="/home">
          <HomePage test={test} />
        </Route>
        <Route path="/home/:id">
          <>
            <NewsPage />
          </>
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login">
            <LazyLogin />
          </Route>

          <Route path="/register">
            <LazyRegister />
          </Route>
          <Route path="/contact" component={ContactPage} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </>
  );
};
