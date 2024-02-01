import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'

const Hero = () => {

    return (

        <Section className={'min-h-screen grid place-content-center'}>

            <div className='flex flex-col justify-center lg:space-y-20 space-y-10'>

                <Paragraph text={'Developer - Software Developer'} variant={'base'} className={'font-thin'} />

                <span className='lg:w-[87vw]'>
                    <Header leadingText={"Discover the essence of Pearl, a free Framer template."} greyText={" Let's shape your brand into a masterpiece together. "} />
                </span>

                <div>
                    <Button 
                    btnText={'Contact'}
                    variant={'black'}
                    />
                </div>

            </div>

        </Section>

    )
}

export default Hero
