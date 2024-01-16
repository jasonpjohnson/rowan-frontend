import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  const navigate = useNavigate();

  return (
    <header class='flex justify-between w-full max-w-screen-xl sm:max-w-screen-sm sm:items-center sm:flex-col sm:gap-2 smd:gap-2'>
      <img
        className='h-auto w-80 cursor-pointer sm:w-32 smd:w-40 md:w-52'
        src='/images/logo.png'
        alt='ROWAN Landscape & Design'
        onClick={() => navigate('/')}
      />
      <NavBar />
    </header>
  );
}

export default Header;
