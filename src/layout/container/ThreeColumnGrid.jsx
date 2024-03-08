import React from 'react'
import Paragraph from '../typography/Paragraph';
import Button from './Button';

const ThreeColumnGrid = ({ caption, greyText, btnText, paragrahText, href, trailingText }) => {
    return (
        <section className='grid lg:grid-cols-[1fr,4fr] lg:gap-0 md:gap-5 lg:space-y-0 space-y-5 md:'>
            <div><Paragraph
                variant={'base'}
                text={caption}
            /></div>

            <section className='grid lg:grid-cols-[2fr,1fr] lg:space-y-0 space-y-10'>
                <div>
                    <Paragraph
                        variant={'paragraph_md'} text={paragrahText} greyText={greyText} trailingText={trailingText}
                    /></div>

                <div className='lg:text-right'>
                    <Button btnText={btnText} variant={'grey'} href={href} />
                </div>
            </section>
        </section>
    )
}

export default ThreeColumnGrid
