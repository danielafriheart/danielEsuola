import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from './Projects'
import Mystory from './MyStory'

const Works = () => {
    return (
        <>
            <Section className={'lg:h-[55vh] md:h-[50vh] h-[45vh] flex flex-col justify-center'}>

                <div className='flex flex-col justify-center lg:space-y-5 space-y-5'>
                    
                    <Header leadingText={"Designing Success"} />

                    <span className='lg:w-[50vw]'>
                        <Paragraph text={"See how we've turned ideas into reality. Dive into the stories of"} greyText={'successful product designs that make a difference.'} variant={'paragraph_md'} />
                    </span>

                </div>

            </Section>
            <Projects />
            <Mystory />
        </>
    )
}

export default Works
