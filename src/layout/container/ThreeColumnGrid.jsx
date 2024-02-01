import React from 'react'
import Paragraph from '../typography/Paragraph';
import Button from './Button';

const ThreeColumnGrid = ({ caption, greyText, btnText, paragrahText }) => {
    return (
        <section className='grid grid-cols-[1fr,4fr] lg:gap-0 gap-10'>
            <div><Paragraph variant={'base'} text={caption}  className={'font-thin'}/></div>

            <section className='grid lg:grid-cols-[4fr,1fr] lg:space-y-0 space-y-10'>
                <div><Paragraph variant={'paragraph'} text={paragrahText} greyText={greyText} /></div>
                <div className='lg:text-right'><Button btnText={btnText} variant={'grey'} /></div>
            </section>
        </section>
    )
}

export default ThreeColumnGrid
