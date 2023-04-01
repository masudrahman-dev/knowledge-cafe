import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div className='mb-12 p-7 overflow-auto dark:text-slate-100 dark:bg-slate-700 rounded-xl shadow-lg'>
      <h1 className='text-2xl  font-bold pb-5 '>{blog.question}</h1>
      <p className='text-lg leading-8'>{blog.answer}</p>
      <div className='mockup-code mt-3 '>
        <pre data-prefix='$'  >
          <code >{blog.answer_example}</code>
        </pre>
      </div>
    </div>
  );
};

export default Blog;
