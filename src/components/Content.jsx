// import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../data/populatePortfolios';

function Content() {
  const posts = useFetch();
  const { id } = useParams();
  console.log(posts);

  const posting = posts.find((post) => post.id === id);
  const otherPosts = posts.filter((post) => post.id !== id);
  console.log(posting);
  return (
    <div className="content">
      <div className="container">
        <div className="main">
          <img src={posting.img} alt="" />
          <span className="title">{posting.title}</span>
          <span className="desc">{posting.desc}</span>
        </div>
        <div className="side">
          <span>Other Portfolio</span>
          {otherPosts.map((post) => (
            <div className="other" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <Link replace to={`/portfolio/${post.id}`} className="title">{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
