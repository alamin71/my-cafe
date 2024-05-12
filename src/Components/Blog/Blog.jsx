import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddBookmarks}) => {
    const {title, cover, author, author_img,post_date, reading_time, hashtag} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{post_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmarks(blog)} className='ml-2 text-2x text-red-600'><FaBookmark></FaBookmark></button>

                </div>

            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx} ><a href=""> #{hash}</a></span>)
                }
            </p>
        </div>
    );
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func
   }

export default Blog;