import React from 'react'
import Paragraph from '../typography/Paragraph';
import Section from './Section';
import Header from '../typography/Header';

const TwoColumnGrid = ({ caption, greyText, children, paragrahText, trailingText, variant, header }) => {
  return (
    <Section className='grid lg:grid-cols-[1fr,4fr] lg:gap-0 gap-5'>
      <div>
        <Paragraph
          variant={'base'}
          text={caption}
          delay={200}
        />
      </div>
      <div className='gap-y-10 flex flex-col'>
        {header && <Header leadingText={header} className={'lg:w-fit'} />}
        {paragrahText &&
          <Paragraph
            variant={variant}
            text={paragrahText}
            greyText={greyText}
            trailingText={trailingText}
            delay={300}
          />
        }
        {children && <div className='space-y-10'>{children}</div>}
      </div>

    </Section>
  )
}

export default TwoColumnGrid
