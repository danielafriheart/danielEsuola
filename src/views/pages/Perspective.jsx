import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Perspective = () => {
  return (
    <TwoColumnGrid 
    caption={'Perspective'} 
    variant={'paragraph'}
    paragrahText={' I redefine possibility by combining imagination with precision to shape extraordinary experiences. As humans, I believe our sole purpose is to create.'} 
    >
        <Paragraph
        className={'lg:w-[70%]'}
            text={"With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.."}
            variant={'label'}
        />

        <Paragraph
        className={'lg:w-[70%]'}
            text={"With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences."} 
            variant={'label'} 
        />
    </TwoColumnGrid>
  )
}

export default Perspective
