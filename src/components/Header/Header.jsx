import React from 'react';

const Header = () => {
  return (
    <nav className='flex justify-between  py-5 mb-12 border-b'>
      <h1>
        <a className='btn btn-ghost pl-0 normal-case text-3xl'>
          Knowledge Cafe
        </a>
      </h1>

      <div>
        <label
          tabIndex={0}
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-10 rounded-full'>
            <img src='https://source.unsplash.com/user/c_v_r/100x100' />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Header;
