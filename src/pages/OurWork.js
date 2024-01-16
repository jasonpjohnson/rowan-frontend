import Subtitle from '../components/UI/Subtitle';

function OurWork() {
  return (
    <div className='w-full h-full'>
      <Subtitle statement='TAKE A LOOK AROUND AT SOME OF OUR COMPLETED PROJECTS!' />

      <div className='max-w-screen-xl mx-auto grid grid-cols-3 grid-row-3 gap-3 mt-48 sm:max-w-screen-sm sm:flex sm:flex-col sm:gap-1 sm:mt-40'>
        <img
          className='w-full h-auto'
          src='/images/work-1.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-2.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-3.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-4.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-5.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-6.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-7.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-8.png'
          alt='Beautiful Landscape'
        />

        <img
          className='w-full h-auto'
          src='/images/work-9.png'
          alt='Beautiful Landscape'
        />
      </div>
    </div>
  );
}

export default OurWork;
