import React from 'react';
import './Blog.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import BlogCards from '../components/BlogCards';

function Blog() {
  return (
    <div className="">
      <p className="Hello-text">My Blog!</p>
      <BlogCards />
      {/* <PageUnderConstruction /> */}
    </div>
  );
}

export default Blog;
