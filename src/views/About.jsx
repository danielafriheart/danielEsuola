import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import DesignSuccess from '../components/DesignSuccess'
import Gallery from '../components/Gallery'
import MediaCard from '../components/MediaCard'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'
import Interests from '../components/PersonalInterest'
import Container from '../layout/container/Container'
import Hero from '../components/Hero'


const About = () => {
    const Services = [
        {
            name: 'Career Essentials in Software Development by Microsoft & LinkedIn 2024',
            caption: 'By Microsoft and LinkedIn January 24, 2024',
        },
        {
            name: 'JavaScript Algorithms & Data Structures 2023',
            caption: 'This certifies that I successfully completed the JavaScript Algorithms and Data Structures, representing approximately 300 hours of work.',
        },
        {
            name: 'Responsive Web Design 2022',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022.',
        },

    ]

    return (
        <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
            <Hero />
            <Gallery />

            <TwoColumnGrid caption={'Perspective'} greyText={'As humans, I believe our sole purpose is to create.'} paragrahText={' I redefine possibility by combining imagination with precision to shape extraordinary experiences. '}>
                <Paragraph text={"With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.."} variant={'base'} className={'font-thin'} />

                <Paragraph text={"With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences."} variant={'base'} className={'font-thin'} />
            </TwoColumnGrid>

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

            <DesignSuccess />

        </Container>
    )
}

export default About
