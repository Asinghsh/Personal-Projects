import React, { useState,useEffect } from 'react';
import Home from './Home';
import useFetch from './useFetch';

function BlogList() {
  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
 
  return (
    <div className="home">
        {error&& <div>{error}</div>}
        {isPending&& <div>Loading...</div>}
     {blogs&& <Home blogs={blogs} title={'AllBlogs'} />}
      
    </div>
  );
}

export default BlogList;
