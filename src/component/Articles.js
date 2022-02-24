import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data.json";

function Articles() {
  return (
      <div>
        <ul className="articles">
          {articles.map((article) => (
            <li key={article.title}>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </div>
    
  )
}

export default withRouter(Articles);
