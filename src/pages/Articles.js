import React, { useState, useEffect } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <>
      <h1>Articles</h1>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <h3>by {article.author}</h3>
          </div>
        ))}
    </>
  );
};
