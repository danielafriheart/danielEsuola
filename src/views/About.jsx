import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from './Projects'
import Mystory from './MyStory'

const About = () => {
    return (
        <>
            <Section className={'lg:h-[70vh] md:h-[50vh] h-[45vh] flex flex-col justify-center'}>

                <div className='flex flex-col justify-center lg:space-y-5 space-y-8 lg:w-[50vw] w-full'>

                    <Paragraph text={'About Me'} variant={'base'} className={'font-thin'} />

                    <Header leadingText={"Create Your Dream Website With The"} greyText={' Free Framer Template'} />

                    <Paragraph text={"We redefine possibility by combining imagination with precision to shape extraordinary experiences."} variant={'paragraph_md'} />

                </div>

            </Section>
            <Projects />
            <Mystory />
        </>
    )
}

export default About
