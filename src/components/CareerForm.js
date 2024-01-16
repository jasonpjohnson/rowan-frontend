import BtnBorder from './UI/BtnBorder';

function CareerForm() {
  return (
    <form className='w-full mt-10 px-10 flex flex-col gap-8 sm:gap-2 sm:items-center'>
      <h2 className='text-4xl sm:text-3xl'>Join our team</h2>

      <div className='flex justify-between sm:flex-col sm:gap-2'>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Full Name
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='text'
            placeholder='John Doe'
          />
        </label>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Phone
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='tel'
            placeholder='xxx-xxx-xxxx'
          />
        </label>
      </div>

      <div className='flex justify-between sm:flex-col sm:gap-2'>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Email
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='email'
            placeholder='you@gmail.com'
          />
        </label>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Desired Pay Range
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='text'
          />
        </label>
      </div>

      <div>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Tell me about yourself and your experience
          <textarea
            className='text-2xl border-2 rounded px-5 py-3 w-full sm:w-[315px] sm:text-xl'
            name=''
            id=''
            cols='30'
            rows='3'
          ></textarea>
        </label>
      </div>

      <div className='self-center sm:mt-5'>
        <BtnBorder border='border-4'>
          <button
            className='font-light text-3xl py-2 px-24 sm:text-xl'
            type='submit'
          >
            SUBMIT
          </button>
        </BtnBorder>
      </div>
    </form>
  );
}

export default CareerForm;
