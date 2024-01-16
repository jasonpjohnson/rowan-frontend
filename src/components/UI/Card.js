import BtnBorder from './BtnBorder';
import { useNavigate } from 'react-router-dom';

function Card({
  bgReverse,
  width = 'w-[1050px]',
  title,
  firstDescription,
  secondDescription,
  firstBtn,
  firstBtnLink,
  secondBtn,
  secondBtnLink,
  btnToBelow,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`${width} h-full ${
        bgReverse && 'self-end'
      } mb-5 md:max-w-[900px] smd:max-w-[750px] sm:max-w-screen-xs sm:self-center`}
    >
      <div className='relative'>
        <img
          className={`absolute z-0 ${
            bgReverse && 'scale-x-[-1]'
          } sm:h-[580px] sm:object-cover`}
          src='/images/card-background.png'
          alt='grey backgrond for card'
        />
      </div>
      <div className='relative text-[25px] z-1 text-white font-light p-10 sm:text-lg sm:p-9 smd:p-3 smd:text-lg md:text-xl'>
        {title && (
          <h2 className='text-4xl mb-7 sm:text-xl smd:text-xl md:text-2xl smd:mb-5'>
            {title}
          </h2>
        )}
        <div
          className={`flex justify-around ${
            btnToBelow && 'flex-col'
          } smd:items-center sm:flex-col`}
        >
          <div
            className={`flex flex-col gap-2 ${
              !btnToBelow &&
              'w-[550px] md:w-[450px] smd:w-[450px] sm:w-[250px] sm:mb-5'
            } ${bgReverse && 'order-2 w-[600px]'} ${
              btnToBelow &&
              'w-[1000px] text-center gap-4 sm:w-[250px] smd:gap-1 smd:w-[600px] md:w-[800px]'
            }`}
          >
            {firstDescription && <p>{firstDescription}</p>}
            {secondDescription && <p>{secondDescription}</p>}
          </div>
          <div
            className={`flex flex-col justify-center gap-8 ${
              btnToBelow && 'items-center mx-auto mt-5'
            } md:text-xl md:gap-6 smd:gap-3 sm:gap-3 sm:order-2`}
          >
            {firstBtn && (
              <BtnBorder>
                <button
                  className={`w-full ${
                    !btnToBelow &&
                    'py-5 px-7 md:py-4 sm:px-2 sm:py-2 smd:px-2 smd:py-2'
                  } ${btnToBelow && 'py-1.5 px-9'}`}
                  onClick={() => navigate(firstBtnLink)}
                >
                  {firstBtn}
                </button>
              </BtnBorder>
            )}
            {secondBtn && (
              <BtnBorder>
                <button
                  className='py-5 px-7 md:py-4 sm:px-2 sm:py-2 smd:px-2 smd:py-2'
                  onClick={() => navigate(secondBtnLink)}
                >
                  {secondBtn}
                </button>
              </BtnBorder>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
