import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'

const Hero = () => {

    return (

        <Section className={'lg:h-[80vh] md:h-[70vh] h-[60vh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-10 space-y-10 px-0'>


                <Paragraph text={'Developer · Software Developer'} variant={'base'} className={'font-thin'} />

                <span className='lg:w-[80vw] w-full'>
                    <Header leadingText={"Discover the essence of Pearl, a free Framer template."} greyText={" Let's shape your brand into a masterpiece together. "} />
                </span>

                <div>
                    <Button
                        href={'/contact'}
                        btnText={'Contact'}
                        variant={'black'}
                    />
                </div>

            </div>

        </Section>

    )
}

export default Hero
