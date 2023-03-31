import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className='mb-12 p-7 dark:text-slate-100 dark:bg-slate-700 rounded-xl shadow-lg'>
      <h1 className='text-2xl font-bold '>{blog.question}</h1>
      <p className='text-lg'>{blog.answer}</p>
    </div>
  );
};

export default Blog;
