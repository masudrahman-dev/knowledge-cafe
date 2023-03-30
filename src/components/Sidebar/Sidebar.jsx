import React from 'react';

const Sidebar = () => {
  return (
    <div className=''>
      <h2 className=' border rounded-lg  p-5 text-center text-2xl font-bold tracking-wide '>
        Spent time on read : 177 min
      </h2>
      <div className='mt-5 border rounded-lg  p-5 text-center text-2xl tracking-wide'>
        <h2 className='font-bold '>Bookmarked Blogs : 8</h2>
        <ul className=' mt-5'>
          {/* <!-- Sidebar content here --> */}
          <li className='bg-slate-500 text-xl mb-5 rounded-lg p-5'>
            Master Microsoft Power Platform and Become an In-Demand!
          </li>
          <li className='bg-slate-500 text-xl mb-5 rounded-lg p-5'>
            Master Microsoft Power Platform and Become an In-Demand!
          </li>
          <li className='bg-slate-500 text-xl mb-5 rounded-lg p-5'>
            Master Microsoft Power Platform and Become an In-Demand!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
