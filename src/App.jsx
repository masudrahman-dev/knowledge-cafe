import { useState } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <div>
        <Blog></Blog>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
