// import { Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

class HomePage extends Component {
  state = {
    news: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
    );
    console.log(data.data.articles);
    this.setState({
      news: data.data.articles
    });
  }

  render() {
    const { news } = this.state;
    return (
      <>
        {news &&
          news.map(article => (
            <li key={article.url}>
              <Link
                to={{
                  pathname: `/home/${article.publishedAt}`,
                  search: "?category=adventure&city=USA",
                  hash: "#treasure-island",
                  state: { from: news }
                }}
              >
                <img
                  style={{ width: 300 }}
                  alt="news"
                  src={article.urlToImage}
                />
              </Link>
            </li>
          ))}
      </>
    );
  }
}

export default HomePage;
