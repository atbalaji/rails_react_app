import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';

function PostsList(){
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  //Fetch posts from API

  useEffect(()=> {
    async function fetchPosts() {
      try {
        const response = await fetch(API_URL);
        if(response.ok) {
          const json = await response.json();
          setPosts(json);
        }
        else {
          throw response;
        }
      } catch (error) {
        setError("An error occurred");
        console.log("An error occurred", error);
      } finally {
        setLoading(false);
      }

    }

    fetchPosts();
  }, []);

  useEffect(() => {
    // This useEffect will run whenever the 'posts' state is updated
    console.log(posts);
  }, [posts]);


  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className='post-container'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
    ))}
    </div>
    );
}


export default PostsList;