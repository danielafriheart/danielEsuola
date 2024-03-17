import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Perspective = () => {
  return (
    <TwoColumnGrid
      caption={'(迪)'}
      variant={'paragraph_md'}
      header={"I don't just code, I craft possibilities."}
    >
      <Paragraph
        delay={300}
        className={'lg:w-[85%]'}
        text={"As a developer with a passion for creation, I combine visionary thinking with technical precision to bring unique user experiences to life.  For me, the greatest human purpose lies in shaping the world around us, and I do that by collaborating closely with design-focused teams to build impactful websites and microsites."}
        variant={'label'}
      />
      <div className='grid lg:grid-cols-2 lg:pt-5 lg:w-[70%] gap-14'>
        <Paragraph
          delay={400}
          text={" My background spans both product engineering and UI design, allowing me to solve complex product challenges while crafting beautiful and user-friendly web experiences."}
          variant={'caption'}
        />
        <Paragraph
          delay={400}
          text={"With years of experience leading engineering efforts and collaborating on product teams, I bring a well-rounded skillset to every project."}
          variant={'caption'}
        />
      </div>
    </TwoColumnGrid>
  )
}

export default Perspective
