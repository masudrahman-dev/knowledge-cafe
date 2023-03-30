import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <img
            src='	https://source.unsplash.com/user/c_v_r/1600x900'
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            Shoes!
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
