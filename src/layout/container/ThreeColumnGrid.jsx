import React from 'react'
import Paragraph from '../typography/Paragraph';
import Button from './Button';

const ThreeColumnGrid = ({ caption, greyText, btnText, paragrahText, href, trailingText }) => {
    return (
        <section className='grid lg:grid-cols-[1fr,4fr] lg:gap-0 md:gap-5 lg:space-y-0 space-y-5'>
            <div><Paragraph
                variant={'base'}
                text={caption}
                className={'font-thin'}
                data_aos={'fade-in'}
                data_aos_duration={'1000'}
                data_aos_delay={'0'}
            /></div>

            <section className='grid lg:grid-cols-[4fr,1fr] lg:space-y-0 space-y-10'>
                <div><Paragraph
                    data_aos={'fade-in'}
                    data_aos_duration={'0'}
                    data_aos_delay={'0'}
                    variant={'paragraph'} text={paragrahText} greyText={greyText} trailingText={trailingText}
                /></div>

                <div className='lg:text-right'>
                    <Button btnText={btnText} variant={'grey'} href={href}
                    /></div>
            </section>
        </section>
    )
}

export default ThreeColumnGrid
