import React from 'react';
// import { Link } from 'react-router-dom';
import posts from '../data/posts';
import webDeka from '../data/web-deka.png';

function HomePage() {
  return (
    <div className="home">
      <div className="title">PORTFOLIO LIST</div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={webDeka} alt={post.id} />
            </div>
            <div className="content">
              <a href="/">
                <h1>{post.title}</h1>
              </a>
              <p>{post.desc}</p>
              <button type="button">Read More...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
