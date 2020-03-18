import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const mapper = news => {
  return news.map(article => ({ ...article, id: uuidv4() }));
};

export const fetcher = async () => {
  const data = await axios.get(
    `http://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  return mapper(data.data.articles);
};
