import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Projects from '../views/project/Projects'
import Container from '../layout/container/Container'
import ReachOut from '../components/email/ReachOut'

const Works = () => {
    return (
        <Container title={'Workfolio'} description={"Esuola Daniel's Portfolio Website"} className={'pt-32'}>
            <Section className={'min-h-fit lg:h-fit md:h-[70dvh] flex flex-col justify-center '}>
                <div className='flex flex-col justify-center lg:space-y-6 space-y-8'>
                    {/* <Paragraph text={"Work"} variant={'caption'} className={'text-right'} /> */}
                    <div>
                        <h1 className='lg:text-[20rem] leading-none  text-[7rem] md:text-[8rem] text-wrap lg:text-pretty md:text-balance'
                            data-aos="fade-in"
                            data-aos-delay={100}
                            data-aos-easing="ease-in-sine"
                        >Workfolio</h1>
                        <h1 className='lg:text-[20rem] leading-none  text-[7rem] md:text-[8rem] text-wrap lg:text-pretty md:text-balance'
                            data-aos="fade-in"
                            data-aos-delay={200}
                            data-aos-easing="ease-in-sine"
                        >2023-2024 </h1>
                    </div>
                    <Paragraph text={"See how I've turned ideas into reality. Dive into the stories of successful product designs that make a difference."} className={'lg:w-[40vw]'} variant={'label'} delay={300} />
                </div>
            </Section>
            <Projects />
            <ReachOut />
        </Container>
    )
}

export default Works
