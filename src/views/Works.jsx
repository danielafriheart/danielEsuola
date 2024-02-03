import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Button from '../layout/container/Button'
import Projects from './Projects'

const Works = () => {
    return (
        <>
            <Section className={'lg:h-[55vh] md:h-[70vh] h-[60vh] flex flex-col justify-center'}>

                <div className='flex flex-col justify-center lg:space-y-10 space-y-10'>
                    
                    <Header leadingText={"Designing Success"} />

                    <span className='lg:w-[50vw]'>
                        <Paragraph text={"See how we've turned ideas into reality. Dive into the stories of"} greyText={'successful product designs that make a difference.'} variant={'paragraph_md'} className={'w-[50vw]'} />
                    </span>

                </div>

            </Section>
            <Projects />
        </>
    )
}

export default Works
