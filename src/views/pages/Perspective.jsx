import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Perspective = () => {
  return (
    <TwoColumnGrid
      caption={'Perspective'}
      variant={'paragraph_md'}
      header={"I don't just code, I craft possibilities."}
    >
      <Paragraph
        delay={400}
        className={'lg:w-[85%]'}
        text={"As a developer with a passion for creation, I combine visionary thinking with technical precision to bring unique user experiences to life.  For me, the greatest human purpose lies in shaping the world around us, and I do that by collaborating closely with design-focused teams to build impactful websites and microsites."}
        variant={'label'}
      />
      <Paragraph
        delay={500}
        className={'lg:w-[85%]'}
        text={"My background spans both product engineering and UI design, allowing me to solve complex product challenges while crafting beautiful and user-friendly web experiences. With years of experience leading engineering efforts and collaborating on product teams, I bring a well-rounded skillset to every project."}
        variant={'label'}
      />
    </TwoColumnGrid>
  )
}

export default Perspective
