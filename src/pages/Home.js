import Card from '../components/UI/Card';
import WhoWeAre from '../components/WhoWeAre';

function Home() {
  return (
    <section className='flex flex-col items-center gap-9 sm:gap-2'>
      <img
        className='w-full max-w-screen-xl smd:max-w-[700px]'
        src='/images/banner.png'
        alt='Beautiful Landscape'
      />

      <div className='flex items-center justify-between w-full max-w-screen-xl sm:flex-col sm:max-w-sm'>
        <Card
          title='SUPERIOR LANDSCAPE SERVICES - FOR ENJOYABLE OUTDOOR SPACES'
          firstDescription='RL&D is a comprehensive landscape company serving families and
      businesses in Fort Wayne and the surrounding areas. It is our
      priority to provide the most stunning improvements, enjoyable
            experience, and professional services to make your property its
            best!'
          firstBtn='OUR SERVICES'
          firstBtnLink='/what-we-do'
          secondBtn='REQUEST AN ESTIMATE'
          secondBtnLink='/connect'
        />
        <img
          className='w-50 sm:w-32 smd:w-32 md:w-48'
          src='/images/R.png'
          alt='Initial R'
        />
      </div>

      <div className='w-full max-w-screen-xl grid grid-cols-3 gap-2 sm:flex sm:flex-col'>
        <img src='/images/small-image-1.png' alt='A construction' />
        <img src='/images/small-image-2.png' alt='A house with flowers' />
        <img src='/images/small-image-3.png' alt='A house with a yard' />
      </div>

      <Card
        bgReverse
        firstDescription='Experience the RL&D difference by scheduling an on site walk-thru with one of our consultants. We\’ll discuss your vision and apply our expert assessment.'
        secondDescription='Whether we improve what you have or take you from the dirt up; our simple 1-2-3 process helps you realize the full potential of your space. We use modern 2D & 3D design software to enable you to visualize your end result!'
        firstBtn='TELL ME MORE'
        firstBtnLink='/what-we-do'
        secondBtn='REQUEST AN ESTIMATE'
        secondBtnLink='/connect'
      />

      <div className='w-full max-w-screen-xl grid grid-cols-4 gap-1.5 sm:flex sm:flex-col sm:mt-5'>
        <img src='/images/review-1.png' alt='Positive review' />
        <img src='/images/review-2.png' alt='Positive review' />
        <img src='/images/review-3.png' alt='Positive review' />
        <img src='/images/review-4.png' alt='Positive review' />
      </div>

      <WhoWeAre />
    </section>
  );
}

export default Home;
