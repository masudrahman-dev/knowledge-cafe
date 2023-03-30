import { useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' max-w-screen-xl   mx-auto   '>
      <div className='mx-3'>
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-7 '>
          <div className='md:col-span-6 lg:col-span-7 xl:col-span-8'>
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
          </div>
          <div className='md:col-span-6 lg:col-span-5 xl:col-span-4'>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
