import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

const Post = (props) => {
  // console.log('props :>> ', props);
  const {
    _id,
    author_image,
    blog_cover_image,
    blog_title,
    firstName,
    lastName,
    published_time,
    read_time,
  } = props.post;
  const { countMinute } = props;
  const { countBlogTitle } = props;
  const { notify } = props;
  // console.log('notify :>> ', notify);
  return (
    <div className=' mb-10'>
      <div className='card  dark:text-slate-100 dark:bg-slate-700 shadow-xl leading-10 '>
        <div className=' mx-8 mt-8 border-3'>
          <img
            src={blog_cover_image}
            alt='Shoes'
            className='rounded-xl w-full'
          />
        </div>
        <div className='card-body'>
          <div className='lg:flex lg:justify-between '>
            <div className='flex gap-5 items-center'>
              <div className='avatar '>
                <div className='w-16 rounded-full'>
                  <img src={author_image} />
                </div>
              </div>
              <div>
                <h4 className='text-2xl font-semibold tracking-wide'>
                  Mr. {firstName} {lastName}
                </h4>
                <p>{published_time}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  countBlogTitle(blog_title);
                  notify(_id);
                }}
              >
                <p className='text-lg'>
                  {read_time} min read{' '}
                  <span className=' btn btn-ghost'>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      bounce
                      size='xl'
                    />
                  </span>
                </p>
              </button>
            </div>
          </div>
          <h1 className='text-xl md:text-2xl font-bold '>{blog_title}</h1>
          <p>
            <span>#beginners</span> <span>#programming</span>
          </p>
          <div>
            <button
              onClick={() => countMinute(read_time)}
              className='btn btn-ghost -ml-3 underline text-xl tracking-wide'
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
