import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from '../views/project/Projects'
import Container from '../layout/container/Container'
import ReachOut from '../components/email/ReachOut'

const Works = () => {
    return (
        <Container title={'Esuola Daniel ® | Work'} description={"Esuola Daniel's Portfolio Website"} className={'pt-32'}>
            <Section className={'min-h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center '}>
                <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                    <Paragraph text={"Work"} variant={'caption'} className={'text-right'} />
                    <Header leadingText={"Selected work (2023-2024)"} className={'uppercase lg:text-[10rem]'} delay={200} />
                    <Paragraph text={"See how I've turned ideas into reality. Dive into the stories of successful product designs that make a difference."} className={'lg:w-[40vw]'} variant={'label'} delay={300} />
                </div>
            </Section>
            <Projects />
            <ReachOut />
        </Container>
    )
}

export default Works
