function Subtitle({ statement }) {
  return (
    <div className='relative'>
      <img
        className='absolute w-full h-36 object-stretch z-0'
        src='/images/subtitle-background.png'
        alt='Subtitle background'
      />
      <div className='absolute w-full z-1 flex flex-col justify-center items-center gap-4 pt-9 sm:pt-4 sm:px-3 sm:gap-2 md:pt-4 md:px-48'>
        <h2 className='max-w-screen-xl mx-auto text-center font-light text-white text-3xl smd:text-2xl sm:text-lg sm:mt-3'>
          {statement}
        </h2>
        <div className='border-2 border-brand w-[850px] smd:w-[550px] sm:w-[300px]'></div>
      </div>
    </div>
  );
}

export default Subtitle;
