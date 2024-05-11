import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddBookmarks}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h2>Blogs: {blogs.length} </h2>
            {
                blogs.map(blog => <Blog key = {blog.id} handleAddBookmarks={handleAddBookmarks}
                blog = {blog} ></Blog>)
            }
    
        </div>
    );
};

export default Blogs;