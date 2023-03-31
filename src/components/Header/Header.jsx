import React from 'react';

const Header = () => {
  return (
    <nav className='flex justify-between  py-5 mb-12 border-b dark:text-slate-100'>
      <h1>
        <a className='btn btn-ghost pl-0 normal-case text-3xl'>
          Knowledge Cafe
        </a>
      </h1>

      <div className='flex  gap-5 items-center'>
        <ul className='text-xl flex gap-5'>
          <li><a href="">Home</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <label
          tabIndex={0}
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-10 rounded-full'>
            <img src='https://i.pravatar.cc/300?u=94a5319961b62c15cc206d68e334' />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Header;
