import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'

const Hero = () => {


    return (
        <Section className={'h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                <Paragraph
                    text={"About"}
                    variant={'caption'}
                    className={'text-right'} />
                <Header leadingText={'Esteemed developer based in pluto'} className={'uppercase lg:text-[10rem]'} delay={200} />
                <Paragraph
                    text={"I support Designers & Agencies with Creative Development."}
                    variant={'paragraph_md'}
                    delay={300}
                    className={'lg:w-[40%] lg:hidden'}
                />
                <div>
                    <Button
                        btnText={'Esuoladaniel002@gmail.com'}
                        variant={'grey'}
                        href={'mailto:esuoladaniel002@gmail.com'}
                        delay={500}
                    />
                </div>
            </div>
        </Section>

    )
}

export default Hero
