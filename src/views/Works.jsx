import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from '../components/Projects'
import Mystory from '../components/MyStory'
import Container from '../layout/container/Container'

const Works = () => {
    return (
        <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
            <Section className={'lg:h-[55vh] md:h-[50vh] h-[45vh] flex flex-col justify-center'}>
                <div className='flex flex-col justify-center lg:space-y-6 space-y-10'>
                    <Header leadingText={"Selected Work (2018 - 2024)"} />
                    <span className='lg:w-[50vw]'>
                        <Paragraph
                            data_aos_delay={'300'}
                            text={"See how I've turned ideas into reality. Dive into the stories of"} greyText={'successful product designs that make a difference.'} variant={'paragraph_md'} />
                    </span>
                </div>
            </Section>
            <Projects />
            <Mystory />
        </Container>
    )
}

export default Works
