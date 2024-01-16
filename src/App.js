import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col items-center gap-9 mt-5 sm:gap-2 sm:mt-2'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
