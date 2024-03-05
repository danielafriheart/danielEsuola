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
        />
      </div>
      <div>
        {header ? <Header leadingText={header} className={'lg:w-fit lg:text-[6rem] md:text-[5rem]'}/> : ''}

        <Paragraph
          data_aos_delay={'200'}
          variant={variant}
          text={paragrahText}
          greyText={greyText}
          trailingText={trailingText}
        />

        {children && <div className='lg:mt-20 mt-10 space-y-10'>{children}</div>}
      </div>

    </Section>
  )
}

export default TwoColumnGrid
