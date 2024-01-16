import { NavLink } from 'react-router-dom';
import BtnBorder from './UI/BtnBorder';

function NavBar() {
  return (
    <nav className='font-light text-3xl flex items-center gap-5 sm:text-sm sm:gap-2 sm:px-1 smd:text-2xl'>
      <NavLink to='/what-we-do'>WHAT WE DO</NavLink>
      <div className='h-7 w-0.5 bg-brand'></div>
      <NavLink to='/our-work'>OUR WORK</NavLink>
      <div className='h-7 w-0.5 bg-brand'></div>
      <NavLink to='/reviews'>REVIEWS</NavLink>
      <div className='h-7 w-0.5 bg-brand'></div>
      <NavLink to='/connect'>CONNECT</NavLink>
      <BtnBorder>
        <NavLink
          className='text-[26px] px-4 py-2 inline-block sm:px-1 sm:py-0 sm:text-sm sm:inline-block md:text-xl'
          to='/connect'
        >
          Request an Estimate
        </NavLink>
      </BtnBorder>
    </nav>
  );
}

export default NavBar;
