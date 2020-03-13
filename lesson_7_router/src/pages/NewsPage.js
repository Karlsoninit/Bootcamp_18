import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link, Route } from "react-router-dom";
import ContentPage from "./ContentPage";

class NewsPage extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
    );
    console.log(data.data.articles);
    const findArticle = data.data.articles.find(
      article => article.publishedAt === this.props.match.params.id
    );

    this.setState({
      article: findArticle
    });
  }

  render() {
    const { article } = this.state;

    console.log("--- ! ---", this.props);

    const parse = queryString.parse(this.props.location.search);
    console.log(parse);
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

export default NewsPage;
