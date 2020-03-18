import React, { Component } from "react";

import queryString from "query-string";
import { Link, Route, withRouter } from "react-router-dom";
import ContentPage from "./ContentPage";

class NewsPage extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    const findArticle = this.props.location.state.news.find(article => {
      console.log(article.id === this.props.match.params.id);
      return article.id === this.props.match.params.id;
    });

    this.setState({
      article: findArticle
    });
  }

  render() {
    const { article } = this.state;
    queryString.parse(this.props.location.search);

    return (
      <>
        <h2>news Page</h2>
        {article && (
          <>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img style={{ width: 500 }} alt="news" src={article.urlToImage} />
            <Link
              to={{
                pathname: `/home/:${this.props.match.params.id}/content`,
                state: article.content
              }}
            >
              Content
            </Link>
            <Route
              exact
              path={`/home/:${this.props.match.params.id}/content`}
              component={ContentPage}
            />
          </>
        )}
      </>
    );
  }
}

export default withRouter(NewsPage);
