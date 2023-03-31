import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
const Post = (props) => {
  console.log('props :>> ', props);
  const {
    author_image,
    blog_cover_image,
    blog_title,
    firstName,
    lastName,
    date_time,
    sex,
  } = props.post;

  return (
    <div className=' mb-10'>
      <div className='card bg-base-100 shadow-xl leading-10 border'>
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
                {/* <p>{formattedDate}</p> */}
              </div>
            </div>
            <div>
              <p className='text-lg'>
                {/* {randomMinutesOnly} min read{' '} */}
                <span className=' btn btn-ghost'>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    bounce
                    size='xl'
                  />
                </span>
              </p>
            </div>
          </div>
          <h1 className='text-xl md:text-2xl font-bold '>{blog_title}</h1>
          <p>
            <span>#beginners</span> <span>#programming</span>
          </p>
          <div>
            <button
              // onClick={() => getBlogTitle(blog_title)}
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
