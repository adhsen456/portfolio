import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../data/populatePortfolios';

function HomePage() {
  const posts = useFetch();
  console.log(posts);
  return (
    <div className="home">
      <div className="title">PORTFOLIO LIST</div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.id} />
            </div>
            <div className="content">
              <Link to={`/portfolio/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link to={`/portfolio/${post.id}`} className="button">Read More...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
