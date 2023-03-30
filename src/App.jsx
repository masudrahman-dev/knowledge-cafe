import { useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' max-w-screen-xl  mx-auto bg-white shadow-md  '>
      <Header></Header>
      <div className='flex '>
        <Blog></Blog>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
