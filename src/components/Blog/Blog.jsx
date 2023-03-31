import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className='mb-12'>
        <h1 className='text-2xl font-bold mb-3'>{blog.question}</h1>
    <p className='text-lg'>{blog.answer}</p>
    </div>
  );
};

export default Blog;
