import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import DesignSuccess from './DesignSuccess'
import Gallery from './Gallery'
import MediaCard from '../components/MediaCard'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'
import Interests from './PersonalInterest'


const About = () => {
    const Services = [
        {
            name: 'Engineering',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
        },
        {
            name: 'Branding',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
        },
        {
            name: 'Design & Animation',
            caption: 'I collaborate with designers to execute web app and design system animations and interactions.',
        },
        {
            name: 'Creative Implementation',
            caption: 'I design optimized layouts and interactions for performance and usability.',
        },

    ]

    return (
        <>
            <Section className={'lg:h-[65vh] md:h-[50vh] h-[45vh] flex flex-col justify-center'}>
                <div className='flex flex-col justify-center lg:space-y-6 space-y-8 lg:w-[50vw]'>
                    <Paragraph text={'About Me'} variant={'base'} className={'font-thin'} />
                    <Header leadingText={"Create Your Dream Website With The"} greyText={' Free Framer Template'} />
                    <Paragraph text={"We redefine possibility by combining imagination with precision to shape extraordinary experiences."} variant={'paragraph_md'} />
                </div>
            </Section>

            <Gallery />

            <TwoColumnGrid caption={'Our Mission'} paragrahText={'We strive to bring creativity and functionality together,'} greyText={' crafting solutions that resonate with your audience. '} />

            <Section>
                <Interests />
            </Section>

            <TwoColumnGrid caption={'Services'} paragrahText={'Services are designed with simplicity and '} greyText={' effectiveness in mind.'} trailingText={' We offer a comprehensive range of solutions tailored to meet your design needs.'}>
                {Services.map(Service => (
                    <ul>
                        <li className='mb-8'>
                            <Paragraph text={Service.name} variant={'label'} />
                            <Paragraph text={Service.caption} variant={'base'} className={'font-thin mt-2'} />
                        </li>
                    </ul>
                ))}
            </TwoColumnGrid>

            <Section>
                <MediaCard imageSrc={"https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/nkhzPF2aG9jHzZ0Tx12GETeVy0_nrbmax.webp"} customHeight={'65vh'} />
            </Section>

            <DesignSuccess />

        </>
    )
}

export default About
