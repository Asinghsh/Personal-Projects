import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
  const { id } = useParams();
  const {data:blog, isPending, error}=useFetch('http://localhost:8000/blogs/' + id);
  const navigate=useNavigate();

  const handleDelete=()=>{
    fetch('http://localhost:8000/blogs/'+ blog.id,{
        method:'DELETE',

    }).then(()=>{
        navigate('/');
    })
  }


  return (
    <div className='blog-details'>
      {isPending&& <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog &&(
        <article>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <body>{blog.body}</body>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
