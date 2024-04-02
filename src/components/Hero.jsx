import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'

const Hero = () => {


    return (
        <Section className={'h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                {/* <Paragraph
                    text={"About"}
                    variant={'caption'}
                    className={'text-right'} /> */}
                <div>
                    <h1 className='lg:text-[20rem] leading-none  text-[7rem] md:text-[8rem] text-wrap lg:text-pretty md:text-balance'
                        data-aos="fade-in"
                        data-aos-delay={100}
                        data-aos-easing="ease-in-sine"
                    >Okikiola</h1>
                    <h1 className='lg:text-[20rem] leading-none  text-[7rem] md:text-[8rem] text-wrap lg:text-pretty md:text-balance'
                        data-aos="fade-in"
                        data-aos-delay={200}
                        data-aos-easing="ease-in-sine"
                    >esuola </h1>
                    <h1 className='lg:text-[20rem] leading-none  text-[7rem] md:text-[8rem] text-wrap lg:text-pretty md:text-balance'
                        data-aos="fade-in"
                        data-aos-delay={300}
                        data-aos-easing="ease-in-sine"
                    >Daniel </h1>
                </div>
                {/* <div>
                    <div className='flex justify-between border-b-8 border-black '>
                        <Header leadingText={'earthling '} className={'uppercase '} delay={200} />
                    </div>
                    <div className='lg:flex justify-between border-b-8 border-black '>
                        <Header leadingText={'full stack'} className={'uppercase '} delay={200} />
                        <Header leadingText={'developer'} className={'uppercase '} delay={200} />
                    </div>
                    <div className='lg:flex justify-between'>
                        <Header leadingText={'Based in →'} className={'uppercase '} delay={200} />
                        <Header leadingText={'pluto at heart'} className={'uppercase '} delay={200} />
                    </div>
                </div> */}
                <Paragraph
                    text={"I support Designers & Agencies with Creative Development."}
                    variant={'paragraph_md'}
                    delay={500}
                    className={'lg:w-[40%] lg:hidden'}
                />
                <div className='lg:hidden'>
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
