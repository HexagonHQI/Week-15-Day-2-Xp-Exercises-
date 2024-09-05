// src/PostList.js
import React, { useState, useEffect } from 'react';
import postsData from './posts.json'; // Import the JSON data

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load posts data from the JSON file
    setPosts(postsData);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Posts</h2>
      <div className="list-group">
        {posts.map(post => (
          <div key={post.id} className="list-group-item list-group-item-action">
            <h5 className="mb-1">{post.title}</h5>
            <p className="mb-1">{post.content}</p>
            <small>{post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
