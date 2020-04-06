import React, { useState, useEffect } from "react";

import "../Styles/_RecentNews.scss";
import { Grid } from "semantic-ui-react";

const DEFAULT_CLASSNAME = "news";

export default function RecentNews(postData) {
  const posts = postData.RecentNews.map((post) => (
    <div
      className="news__articles-1"
      key={post.id.rendered}
      style={{
        backgroundImage: `url(${post._embedded["wp:featuredmedia"]["0"].source_url}})`,
      }}
    >
      <div className="news__articles-1-overlay">
        <div className="news__articles-1-text">
          <h3>{post.title.rendered}</h3>
          <p>{post.excerpt.rendered}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="section-news">
      <div className="container">
        <div className="news__heading">
          <h3 className="section-headings">Recent News</h3>
        </div>
        <div>
          <div className="news__articles">{posts}</div>
        </div>
        <div className="news__articles-btn">
          <a href="index.js" className="btn-inverse">
            More news
          </a>
        </div>
      </div>
    </div>
  );
}
