import { useEffect, useState } from 'react';
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Blog from './components/Blog/Blog';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('../public/Data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log('data :>> ', data);
  return (
    <div className=' max-w-screen-xl   mx-auto   '>
      <div className='mx-3'>
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-7 '>
          <div className='md:col-span-6 lg:col-span-7 xl:col-span-8'>
            {data.map((post) => (
              <Post
                key={post._id}
                post={post}
              ></Post>
            ))}

          </div>
          <div className='md:col-span-6 lg:col-span-5 xl:col-span-4'>
            <Sidebar></Sidebar>
          </div>
          <div>
            <Blog></Blog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
