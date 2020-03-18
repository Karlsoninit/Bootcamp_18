// import { Route, Link, Switch } from "react-router-dom";
import React, { Component, lazy, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import * as services from "../srvices";
// import Loadable from "react-loadable";

// const LoadableDrawer = Loadable({
//   loader: () => import("../ui/Drawer" /* webpackChunkName: 'DrowerMenu' */),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
const LoadableDrawer = lazy(() =>
  import("../ui/Drawer" /* webpackChunkName: 'DrowerMenu' */)
);
const LoadablePageNotFound = lazy(() =>
  import("./PageNotFound" /* webpackChunkName: 'PageNotFound' */)
);
class HomePage extends Component {
  state = {
    news: null,
    isOpen: false
  };

  handleOpenform = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  };

  async componentDidMount() {
    console.log("key", process.env.REACT_APP_API_KEY);
    this.setState({
      news: await services.fetcher()
    });
  }

  render() {
    const { news, isOpen } = this.state;
    console.log(news);
    return (
      <>
        <Suspense fallback={<p>Loading ...</p>}>
          <LoadablePageNotFound />
          <button onClick={this.handleOpenform}>SHOW</button>
          {isOpen && <LoadableDrawer />}
        </Suspense>

        {news &&
          news.map(article => {
            return (
              <li key={article.id}>
                <Link
                  to={{
                    pathname: `/home/${article.id}`,
                    search: "?category=adventure&city=USA",
                    hash: "#treasure-island",
                    state: { news }
                  }}
                >
                  <img
                    style={{ width: 300 }}
                    alt="news"
                    src={article.urlToImage}
                  />
                </Link>
              </li>
            );
          })}
      </>
    );
  }
}

export default HomePage;
