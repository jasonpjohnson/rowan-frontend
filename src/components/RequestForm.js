import BtnBorder from './UI/BtnBorder';

function RequestForm() {
  return (
    <form className='w-full h-full mt-52 px-10 flex flex-col gap-8 sm:mt-40 sm:gap-2 sm:items-center'>
      <div className='flex justify-between sm:flex-col sm:gap-2'>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          First Name *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='text'
            placeholder='Please enter your first name *'
            required
          />
        </label>

        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Last Name *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='text'
            placeholder='Please enter your last name *'
            required
          />
        </label>
      </div>

      <div className='flex justify-between sm:flex-col sm:gap-2'>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Email *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='email'
            placeholder='Please enter your email *'
            required
          />
        </label>

        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Phone *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='tel'
            placeholder='Please enter your phone *'
            required
          />
        </label>
      </div>

      <div className='flex justify-between sm:flex-col sm:gap-2'>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Address *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='text'
            placeholder='Please enter your address *'
            required
          />
        </label>

        <label className='text-3xl flex flex-col gap-2 sm:text-xl'>
          Zip *
          <input
            className='text-2xl border-2 rounded px-5 py-3 w-[600px] smd:w-[350px] sm:w-[315px] md:text-xl md:w-[400px] sm:text-lg'
            type='number'
            placeholder='Please enter your zip *'
            required
          />
        </label>
      </div>

      <div>
        <label className='text-3xl flex flex-col gap-2 sm:text-xl md:text-2xl'>
          Message *
          <textarea
            className='text-2xl border-2 rounded px-5 py-3 w-full smd:[w-350px] sm:w-[315px] md:text-xl sm:text-lg'
            name=''
            id=''
            cols='30'
            rows='5'
            placeholder='Message for me *'
            required
          />
        </label>
      </div>

      <div className='self-end mr-16 sm:mx-auto sm:mt-5'>
        <BtnBorder border='border-4'>
          <button
            className='font-light text-2xl inline-block py-2 px-12 sm:text-xl'
            type='submit'
          >
            SEND REQUEST
          </button>
        </BtnBorder>
      </div>
    </form>
  );
}

export default RequestForm;
