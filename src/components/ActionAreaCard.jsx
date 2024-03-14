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
      animateTarget.classList.add('scale-125', 'opacity-100', 'bg-white');
      // animateTarget.classList.remove('bg-white/30', 'text-white', 'lg:p-4');

      /* The code block `} else if (e.type === 'mouseleave') { ... }` is handling the mouse leave event.
      When the mouse leaves the target element, it removes the classes 'rotate-45' and 'lg:p-5' from the
      animateTarget element. It also adds the classes 'bg-white/30', 'text-white', and 'lg:p-4' to the
      animateTarget element. This effectively reverts the element back to its original state before the
      mouse entered. */
    } else if (e.type === 'mouseleave') {
      // Mouse leaving, remove the rotate-45 class
      animateTarget.classList.remove('scale-125', 'opacity-100', 'bg-white');
      // animateTarget.classList.add('bg-white/30', 'text-white', 'lg:p-4');
    }
  }

  const img = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/0h67TFuk7bDRVujjwt6jBREPseM_bv6zxx.png"

  return (
    <div
      className={'cursor-pointer'}
      onMouseEnter={handleAnimate}
      onMouseLeave={handleAnimate}
    >
      <section className='space-y-5 mb-10 lg:mb-0 md:mb-0'>

        <MediaCard
          imageSrc={src || img}
          customHeight={customHeight}
          delay={400}
        >
          <div className='grid place-content-center my-auto'>
            <span className='rounded-full w-[120px] h-[120px] transition-all duration-500 animate-target hidden  md:grid lg:grid place-content-center opacity-0 text-sm text-center'>
              <Paragraph text={'View'} className={'text-sm'}/>
              <Paragraph text={'Project'} className={'text-sm'}/>
            </span>
          </div>
        </MediaCard>

        <div className='flex justify-between lg:w-[80%] mt-5'>
          <Paragraph variant={'caption'} text={caption} className={'font-medium'}/>
          <Paragraph variant={'caption'} text={label} className={'w-1/3 hidden lg:flex md:flex font-medium'} />
          <Paragraph variant={'caption'} text={year} className={'font-medium'}/>
        </div>

      </section>
    </div>
  )
}

export default ActionAreaCard
