import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from '../views/project/Projects'
import Mystory from '../components/MyStory'
import Container from '../layout/container/Container'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'
import ThreeColumnGrid from '../layout/container/ThreeColumnGrid'
import Button from '../layout/container/Button'

const Works = () => {
    return (
        <Container title={'Esuola ® - Esteemed Creative Developer'} description={"Esuola Daniel's Portfolio Website"}>

            <Section className={'min-h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center'}>
                <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                    <Paragraph text={"Work"} variant={'label'} className={'text-right'} />
                    <Header leadingText={"SELECTED PROJECTS"} className={'uppercase lg:text-[7rem] md:text-[5rem]'} />
                    <Header leadingText={"(2018 - 2024)"} className={'uppercase lg:text-[7rem] md:text-[5rem]'} />
                    <span className='lg:w-[50vw]'>
                        <Paragraph
                            text={"See how I've turned ideas into reality. Dive into the stories of successful product designs that make a difference."} variant={'paragraph_md'} />
                    </span>

                </div>
            </Section>
            <Projects />
            {/* <Mystory /> */}

            <TwoColumnGrid>
                <Paragraph text={"Looking to grow your business through the power of great digital design? "} variant={'paragraph'} className={'lg:w-[75%]'} />
                <Paragraph text={"Reach out to get the conversation started about your digital design needs. "} variant={'paragraph'} className={'lg:w-[75%]'} />
                <div>
                    <Button btnText={'Esuoladaniel002@gmail.com'} variant={'grey'} href={'mailto:esuoladaniel002@gmail.com'} />
                </div>
            </TwoColumnGrid>

        </Container>
    )
}

export default Works
