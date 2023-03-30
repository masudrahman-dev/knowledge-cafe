import { useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' max-w-screen-xl  mx-auto  shadow-md  '>
      <Header></Header>
      <div className='grid grid-cols-12 gap-7'>
        <div className='col-span-8'>
          <Blog></Blog>
        </div>
        <div className='col-span-4'>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
