import React from 'react';

const Sidebar = ({ readTime,blogTitle }) => {
  // console.log('readTime :>> ', readTime);
  console.log('blogTitle :>> ', blogTitle);
  return (
    <div className=' '>
      <h2 className=' border rounded-lg  p-5 text-center text-xl md:text-2xl font-bold tracking-wide '>
        Spent time on read : {readTime} min

      </h2>
      <div className='mt-5 border rounded-lg  p-5 text-center '>
        <h2 className='font-bold text-xl md:text-2xl tracking-wide'>
          Bookmarked Blogs : {blogTitle.length}
        </h2>
        <ul className=' mt-5 text-lg md:text-xl '>
          {blogTitle.map((title,inx) => (
            <li key={inx} className='bg-slate-500  mb-5 rounded-lg p-5'>{title}</li>
          ))}

          {/* <li className='bg-slate-500  mb-5 rounded-lg p-5'>
            Master Microsoft Power Platform and Become an In-Demand!
          </li>
          <li className='bg-slate-500  mb-5 rounded-lg p-5'>
            Master Microsoft Power Platform and Become an In-Demand!
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
