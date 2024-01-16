import RequestForm from '../components/RequestForm';
import Subtitle from '../components/UI/Subtitle';

function Connect() {
  return (
    <div className='w-full sm:max-w-screen-sm'>
      <Subtitle statement='Please fill out the details below and we will reach out to you about your inquiry as soon as possible!' />

      <div className='max-w-screen-xl mx-auto sm:max-w-screen-sm'>
        <RequestForm />
      </div>

      <img
        className='w-full h-[700px] mt-10 object-cover sm:h-auto'
        src='/images/connect-image.png'
        alt='Rowan Landscape & Design office'
      />
    </div>
  );
}

export default Connect;
