import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'

const Hero = () => {


    return (
        <Section className={'h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                <div>
                    <Header leadingText={'Esuola Daniel'} className={'uppercase'} />
                    <Header leadingText={'fullstack developer'} className={'uppercase'} />
                </div>

                <Paragraph
                    text={"I support Designers & Agencies with Creative Development."}
                    variant={'paragraph_md'}
                    className={'lg:w-[40%]'}
                />
                <div>
                    <Button 
                    btnText={'esuoladaniel002@gmail.com'} 
                    variant={'grey'} 
                    href={'mailto:esuoladaniel002@gmail.com'}
                    />
                </div>
            </div>
        </Section>

    )
}

export default Hero
