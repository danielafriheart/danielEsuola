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
                <div>
                    <Header leadingText={'Esteemed developer based in pluto'} className={'uppercase '} delay={200}/>
                    {/* <Header leadingText={'developer'} className={'uppercase'} delay={300}/> */}
                    {/* <Header leadingText={'based in pluto'} className={'uppercase'} delay={400}/> */}
                </div>
                <Paragraph
                    text={"I support Designers & Agencies with Creative Development."}
                    variant={'paragraph_md'}
                    delay={500}
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
