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
            name: 'Career Essentials in Software Development by Microsoft and LinkedIn 2024',
            caption: 'By Microsoft and LinkedIn 2024',
        },
        {
            name: 'JavaScript Algorithms & Data Structures 2023',
            caption: 'Representing approximately 300 hours of work..',
        },
        {
            name: 'Responsive Web Design 2022',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022',
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

            <Interests />

            <TwoColumnGrid caption={'Honors'} paragrahText={'Awards '} greyText={' &'} trailingText={' Recognitions.'}>
                {Services.map(Service => (
                    <ul>
                        <li className='mb-8'>
                            <Paragraph text={Service.name} variant={'label'} />
                            <Paragraph text={Service.caption} variant={'base'} className={'font-thin mt-2'} />
                        </li>
                    </ul>
                ))}
            </TwoColumnGrid>

            {/* <Section>
                <MediaCard imageSrc={"https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/nkhzPF2aG9jHzZ0Tx12GETeVy0_nrbmax.webp"} customHeight={'65vh'} />
            </Section> */}

            {/* <DesignSuccess /> */}

        </>
    )
}

export default About
