import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    const title=props.title;
    const blogs=props.blogs;
    if(!blogs || blogs.length===0){
        return console.log("");
    }
  return (
    <div className='Blog-list'>
        <h2>{title}</h2>
        {blogs.map((blog) => (
        <div key={blog.id} className='Blogs'>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{`Written By ${blog.author}`}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
