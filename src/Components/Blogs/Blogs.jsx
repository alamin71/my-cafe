import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3 space-y-4'>
            <h2>Blogs: {blogs.length} </h2>
            {
                blogs.map(blog => <Blog key = {blog.id} handleAddBookmarks={handleAddBookmarks}
                blog = {blog} handleMarkAsRead={handleMarkAsRead} ></Blog>)
            }
    
        </div>
    );
};

Blogs.propTypes ={
    handleAddBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;