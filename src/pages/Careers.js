import CareerForm from '../components/CareerForm';

function Careers() {
  return (
    <div className='w-full max-w-screen-xl smd:max-w-smd sm:max-w-screen-xs'>
      <video src='#'></video>

      <div className='bg-culture-bg bg-no-repeat sm:bg-repeat w-auto h-[600px] font-light text-3xl text-white opacity-90 p-10 flex flex-col gap-3 sm:h-[1050px] sm:text-xl sm:p-8'>
        <h2 className='border-x-2 border-brand w-fit px-4'>OUR CULTURE</h2>
        <p className='text-2xl w-[1100px] leading-snug mb-10 md:w-[1000px] smd:w-[650px] smd:text-xl sm:text-lg sm:w-[270px] sm:mb-24 sm:h-[500px]'>
          At Rowan Landscape & Design, we believe that to satisfy our external
          customers, we first need to satisfy our internal ones: our team
          members. Our commitment to team member satisfaction and development
          stems from a firm belief that our people are our most valuable
          resource. We allow our guiding principles to shape our company culture
          and we refer to them throughout our daily operations. Team members
          enjoy working together and celebrating our successes. We encourage a
          healthy work-life balance for our employees and believe in a positive
          work environment for all!
        </p>

        <h2 className='border-x-2 border-brand w-fit px-4'>
          WHO WE ARE LOOKING FOR
        </h2>
        <p className='text-2xl w-[1100px] leading-snug md:w-[1000px] smd:w-[650px] smd:text-xl sm:text-lg sm:w-[270px] sm:h-[500px]'>
          Rowan Landscape & Design believes that character is more important
          than talent; if you possess the qualities that we aim to import Card
          from '../components/UI/Card'; foster within our company, we can train
          you for specific job skills that you may not yet have. We are looking
          for team players with ambition, a willingness to learn and those that
          take pride in their work.
        </p>
      </div>

      <CareerForm />
    </div>
  );
}

export default Careers;
