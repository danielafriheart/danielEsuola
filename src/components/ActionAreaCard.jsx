import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'

const ActionAreaCard = ({ caption, label }) => {
  const handleAnimate = (e) => {
    const cardDiv = e.currentTarget;
    const animateTarget = cardDiv.querySelector('.animate-target');

    if (e.type === 'mouseenter') {
      // Mouse entering, add the rotate-45 class
      animateTarget.classList.add('rotate-45', 'bg-white', 'lg:p-5');
      animateTarget.classList.remove('bg-white/30', 'text-white', 'lg:p-4');
      console.log('Animating!');
    } else if (e.type === 'mouseleave') {
      // Mouse leaving, remove the rotate-45 class
      animateTarget.classList.remove('rotate-45');
      animateTarget.classList.add('bg-white/30', 'text-white', 'lg:p-4');
    }
  }

  return (
    <a href=""
      className={''}
      onMouseEnter={handleAnimate}
      onMouseLeave={handleAnimate}
    >
      <section className='space-y-5'>
        <div className='h-full relative z-10'>

          <img src="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/0h67TFuk7bDRVujjwt6jBREPseM_bv6zxx.png" alt="image" className='rounded-3xl lg:min-h-[500px] w-full'/>

          <span className='rounded-full lg:p-4 md:p-3 bg-white/30 hover:bg-white w-fit absolute left-5 bottom-5 text-white hover:text-black transition-all duration-300 animate-target hidden lg:flex md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
            </svg>
          </span>

        </div>

        <div className='space-y-2'>
          <Paragraph variant={'caption'} text={caption} />
          <Paragraph variant={'label'} text={label} />
        </div>
      </section>
    </a>
  )
}

export default ActionAreaCard
