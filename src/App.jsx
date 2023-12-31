import { useEffect, useState } from 'react';
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Blog from './components/Blog/Blog';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [data, setData] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [toastAlert, setToastAlert] = useState([]);
  const [blogTitle, setBlogTitle] = useState([]);
  useEffect(() => {
    fetch('Data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const countMinute = (minute) => {
    setReadTime(readTime + Number(minute));
  };
  const countBlogTitle = (blog_title) => {
    let newBlogTitle = [...blogTitle, blog_title];
    // setReadTime(readTime + Number(minute));
    setBlogTitle(newBlogTitle);
  };
  const notify = (id) => {
    setToastAlert([...toastAlert, id]);

    const alertId = toastAlert.find((toaster) => toaster === id);
    if (alertId === id) {
      toast('All Ready Marked.');
    }
  };
  return (
    <div className=' max-w-screen-xl   mx-auto   '>
      <div className='px-3'>
        <Toaster />
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-7 '>
          <div className='md:col-span-6 lg:col-span-7 xl:col-span-8'>
            {data.map((post) => (
              <Post
                countBlogTitle={countBlogTitle}
                countMinute={countMinute}
                key={post._id}
                post={post}
                notify={notify}
              ></Post>
            ))}
          </div>
          <div className='md:col-span-6 lg:col-span-5 xl:col-span-4'>
            <Sidebar
              readTime={readTime}
              blogTitle={blogTitle}
            ></Sidebar>
          </div>
        </div>

        {data.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
}

export default App;
