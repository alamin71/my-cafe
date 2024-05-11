import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, author, author_img,post_date, reading_time, hashtag} = blog;
    return (
        <div>
            <img className='w-2/4' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{post_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>

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
    blog: PropTypes.object.isRequired
   }

export default Blog;