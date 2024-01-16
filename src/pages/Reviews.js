import Card from '../components/UI/Card';

function Reviews() {
  return (
    <div className='flex flex-col gap-14 sm:max-w-screen-xs'>
      <div className='w-full flex items-center'>
        <Card
          firstDescription='RL&D is dedicated to proviing unmatched quality of service, design, construction, & maintenance
    to all of our clients. We are committed to our employees, customers, and community and to being a company of integrity & high moral standard.'
          secondDescription='We would apprecaite if you’d take a minute of your time to let us and others know about your experience with Rowan Landscape & Design'
          firstBtn='LEAVE US A REVIEW!'
          btnToBelow
        />
        <div>
          <img src='/images/R.png' alt='Initial R' />
        </div>
      </div>

      <div className='grid grid-cols-4 grid-rows-1 gap-1.5 sm:flex sm:flex-col sm:items-center'>
        <img
          className='w-[310px]'
          src='/images/review-1.png'
          alt='Positive review'
        />
        <img
          className='w-[310px]'
          src='/images/review-2.png'
          alt='Positive review'
        />
        <img
          className='w-[310px]'
          src='/images/review-3.png'
          alt='Positive review'
        />
        <img
          className='w-[310px]'
          src='/images/review-4.png'
          alt='Positive review'
        />
      </div>
    </div>
  );
}

export default Reviews;
