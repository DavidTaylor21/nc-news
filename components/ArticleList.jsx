import { fetchAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import UsersButton from "../components/UsersButton"
import Users from "./Users";
function ArticleList() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <ul className="article-list">
          <li>
            {...allArticles.map((article) => {
              return <ArticleCard article={article} />;
            })}
          </li>
        </ul>
        <UsersButton/>
      </>
    );
  }
}
export default ArticleList;
