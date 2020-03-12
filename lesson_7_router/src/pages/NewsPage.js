import React, { Component } from "react";
import axios from "axios";

class NewsPage extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
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
    console.log(article);
    console.log(this.props);
    return (
      <>
        {article && (
          <>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img style={{ width: 500 }} alt="news" src={article.urlToImage} />
          </>
        )}
      </>
    );
  }
}

export default NewsPage;
