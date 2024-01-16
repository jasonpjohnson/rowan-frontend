function WhoWeAre() {
  return (
    <div className='flex gap-16 items-center sm:flex-col smd:max-w-[700px] sm:max-w-screen-sm sm:gap-5'>
      <div>
        <div className='flex gap-2.5 smd:gap-1'>
          <img
            className='smd:w-[158px] sm:w-[150px]'
            src='/images/Curtis-Rowan.png'
            alt='Curtis Rowan'
          />
          <img
            className='smd:w-[158px] sm:w-[150px]'
            src='/images/Natalie-Rowan.png'
            alt='Natalie Rowan'
          />
        </div>
        <p className='font-light text-3xl text-center leading-snug mt-2 sm:text-xl'>
          Curtis & Natalie <br />
          Rowan
        </p>
      </div>
      <div className='w-1 h-80 bg-brand smd:hidden sm:hidden'></div>
      <div className='flex flex-col gap-3'>
        <h3 className='font-light text-5xl smd:text-3xl sm:text-2xl'>
          Who We Are:
        </h3>
        <ul className='list-disc font-light text-2xl ml-[22px] flex flex-col gap-1 smd:text-xl sm:text-lg'>
          <li>Locally Owned with 50+ Years Combined Experience</li>
          <li>Customer first business approach</li>
          <li>No Hassle, Hands On, Digitally Designed, Free Quotes</li>
          <li>We use only the best tools money can buy</li>
          <li>Web based quoting, billing & payment</li>
        </ul>
      </div>
    </div>
  );
}

export default WhoWeAre;
