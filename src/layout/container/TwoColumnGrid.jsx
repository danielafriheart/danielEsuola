import React from 'react'
import Paragraph from '../typography/Paragraph';
import Section from './Section';

const TwoColumnGrid = ({ caption, greyText, children, paragrahText, href, trailingText }) => {
  return (
    <Section className='grid lg:grid-cols-[1fr,4fr] lg:gap-0 gap-5'>
      <div><Paragraph variant={'base'} text={caption} className={'font-thin'} /></div>
      <div>
        <Paragraph variant={'paragraph'} text={paragrahText} greyText={greyText} trailingText={trailingText} />

        {children && <div className='mt-20 space-y-5'>{children}</div>}
      </div>

    </Section>
  )
}

export default TwoColumnGrid
