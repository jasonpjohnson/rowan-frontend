import { useNavigate } from 'react-router-dom';
import BtnBorder from './UI/BtnBorder';

function Footer() {
  const navigate = useNavigate();

  const careersClickHandler = () => {
    navigate('/careers');
    window.scrollTo(0, 0);
  };

  const startNowClickHandler = () => {
    navigate('/connect');
    window.scrollTo(0, 0);
  };

  return (
    <footer className='w-full h-auto bg-gradient-to-r from-grey to-white mt-24 py-10'>
      <div className='max-w-screen-xl mx-auto relative flex items-center justify-around sm:max-w-sm sm:flex-col sm:gap-8'>
        <img
          class='absolute top-[-122px] left-0 sm:w-[50%] sm:top-[-91px]'
          src='/images/logo-no-bg.png'
          alt='ROWAN LANDSCAPE & DESIGN'
        />

        <ul class='flex flex-col gap-1 font-light sm:text-md'>
          <li>PHONE: 260.415.0510</li>
          <li>EMAIL: FWLANDSCAPEDESIGNA@GMAIL.COM</li>
          <li>609 INCENTIVE DRIVE, FORT WAYNE, IN 46825</li>
          <li>COPYRIGHT &copy; 2023 ROWAN LANDSCAPE & DESIGN</li>
        </ul>

        <div className='flex gap-24 sm:flex-col sm:gap-8'>
          <ul className='flex flex-col items-center gap-5 sm:flex-row sm:gap-3'>
            <li className='flex justify-center items-end w-[60px] h-[60px] rounded-full bg-darkGrey text-5xl overflow-hidden sm:w-[40px] sm:h-[40px] sm:text-3xl'>
              <i class='fa-brands fa-facebook-f text-white'></i>
            </li>
            <li className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-darkGrey text-5xl overflow-hidden sm:w-[40px] sm:h-[40px] sm:text-3xl'>
              <i class='fa-brands fa-instagram text-white'></i>
            </li>
            <li className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-darkGrey text-5xl overflow-hidden sm:w-[40px] sm:h-[40px] sm:text-3xl'>
              <i class='fa-brands fa-pinterest-p text-white'></i>
            </li>
            <li
              onClick={careersClickHandler}
              className='cursor-pointer text-2xl sm:text-xl'
            >
              Careers
            </li>
          </ul>

          <div class='w-80 text-center sm:w-auto'>
            <h3 className='font-light text-4xl leading-normal mb-6 sm:text-2xl'>
              LET'S CHAT ABOUT
              <br /> YOUR NEXT PROJECT!
            </h3>
            <BtnBorder>
              <button
                onClick={startNowClickHandler}
                className='font-light text-2xl w-56 p-2 sm:text-xl'
              >
                START NOW!
              </button>
            </BtnBorder>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
