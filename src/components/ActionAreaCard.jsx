import React from 'react'
import Paragraph from '../layout/typography/Paragraph'
import MediaCard from '../components/MediaCard'

const ActionAreaCard = ({ caption, label, year, customHeight, src }) => {

  /**
   * The function `handleAnimate` adds or removes classes to animate a target element based on mouse
   * enter or mouse leave events.
   */
  const handleAnimate = (e) => {
    const cardDiv = e.currentTarget;
    const animateTarget = cardDiv.querySelector('.animate-target');

    /* The code block is a conditional statement that checks if the mouse event type is 'mouseenter'. If it
    is, it adds the classes 'rotate-45', 'bg-white', and 'lg:p-5' to the animateTarget element. It also
    removes the classes 'bg-white/30', 'text-white', and 'lg:p-4' from the animateTarget element.
    Finally, it logs the message 'Animating!' to the console. */
    if (e.type === 'mouseenter') {
      // Mouse entering, add the rotate-45 class
      animateTarget.classList.add('rotate-45', 'bg-white', 'lg:p-5');

      animateTarget.classList.remove('bg-white/30', 'text-white', 'lg:p-4');

      /* The code block `} else if (e.type === 'mouseleave') { ... }` is handling the mouse leave event.
      When the mouse leaves the target element, it removes the classes 'rotate-45' and 'lg:p-5' from the
      animateTarget element. It also adds the classes 'bg-white/30', 'text-white', and 'lg:p-4' to the
      animateTarget element. This effectively reverts the element back to its original state before the
      mouse entered. */
    } else if (e.type === 'mouseleave') {
      // Mouse leaving, remove the rotate-45 class
      animateTarget.classList.remove('rotate-45', 'lg:p-5');

      animateTarget.classList.add('bg-white/30', 'text-white', 'lg:p-4');
    }
  }

  const img = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/0h67TFuk7bDRVujjwt6jBREPseM_bv6zxx.png"

  return (
    <a href=""
      className={''}
      onMouseEnter={handleAnimate}
      onMouseLeave={handleAnimate}
    >
      <section className='space-y-5 mb-10 lg:mb-0 md:mb-0'>
        <div className='h-full relative z-10'
          data-aos-delay={'500'}
          data-aos="fade-in"
        >

          <MediaCard
            imageSrc={src || img}
            customHeight={customHeight}
          />

          <span className='rounded-full lg:p-4 md:p-3 bg-white/30 w-fit absolute left-5 bottom-5 text-white hover:text-black transition-all duration-300 animate-target hidden lg:flex md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
            </svg>
          </span>

        </div>

        <div className='space-x-2 flex justify-between'>
          <Paragraph variant={'label'} text={caption} />
          <Paragraph variant={'label'} text={label} />
          <Paragraph variant={'label'} text={year} />
        </div>
      </section>
    </a>
  )
}

export default ActionAreaCard
