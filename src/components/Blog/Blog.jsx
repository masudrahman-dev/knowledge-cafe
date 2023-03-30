import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
const Blog = () => {
  return (
    <div className=' mb-7'>
      <div className='card bg-base-100 shadow-xl leading-10'>
        <figure>
          <img
            src='	https://source.unsplash.com/user/c_v_r/1600x900'
            alt='Shoes'
            className='h-54'
          />
        </figure>
        <div className='card-body'>
          <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
              <div className='avatar '>
                <div className='w-16 rounded-full'>
                  <img src='https://source.unsplash.com/user/c_v_r/1600x900' />
                </div>
              </div>
              <div>
                <h4 className='text-2xl font-semibold tracking-wide'>
                  Mrs. Setara
                </h4>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div>
              <p className=''>
                12 min read{' '}
                <span className='pl-3'>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    bounce
                    size='xl'
                  />
                </span>
              </p>
            </div>
          </div>
          <h1 className='text-3xl font-bold '>
            How to get your first job as a self-taught programmer
          </h1>
          <p>
            <span>#beginners</span> <span>#programming</span>
          </p>
          <p className='underline font-semibold text-xl tracking-wide'>
            Mark as read{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
