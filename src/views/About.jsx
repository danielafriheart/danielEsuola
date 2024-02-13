import React from 'react'
import Paragraph from '../layout/typography/Paragraph'
import DesignSuccess from '../components/DesignSuccess'
import Gallery from '../components/Gallery'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'
import Interests from '../components/PersonalInterest'
import Container from '../layout/container/Container'
import Hero from '../components/Hero'
import Pictures from '../components/Pictures'
import MyServices from '../components/Services'


const About = () => {
    const Services = [
        {
            name: 'Career Essentials in Software Development by Microsoft & LinkedIn 2024',
            caption: 'By Microsoft and LinkedIn January 24, 2024',
            data_aos: 'fade-in',
            data_aos_delay: '400'
        },
        {
            name: 'JavaScript Algorithms & Data Structures 2023',
            caption: 'This certifies that I successfully completed the JavaScript Algorithms and Data Structures, representing approximately 300 hours of work.',
            data_aos: 'fade-in',
            data_aos_delay: '500'
        },
        {
            name: 'Responsive Web Design 2022',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022.',
            data_aos: 'fade-in',
            data_aos_delay: '600'
        },

    ]

    return (
        <Container title={'Okikiola'} description={"Esuola Daniel's Portfolio Website"}>
            <Hero />

            <Gallery />

            <TwoColumnGrid caption={'Perspective'} greyText={'As humans, I believe our sole purpose is to create.'} paragrahText={' I redefine possibility by combining imagination with precision to shape extraordinary experiences. '}>
                <Paragraph
                    data_aos_delay={'300'}
                    text={"With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.."}
                    variant={'base'}
                    className={'font-thin'}
                />

                <Paragraph
                    data_aos_delay={'400'}
                    text={"With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences."} variant={'base'} className={'font-thin'}
                />
            </TwoColumnGrid>

            <MyServices />

            <Interests />

            <TwoColumnGrid caption={''} paragrahText={"When I’m not on my computer, building or exploring new web experiences, "} greyText={' I’m probably playing games or making videos for YouTube.'} />
            <Pictures />


            <TwoColumnGrid caption={'Honors'} paragrahText={'Awards '} greyText={' &'} trailingText={' Recognitions.'}>
                {Services.map(Service => (
                    <ul>
                        <li className='mb-8'>
                            <Paragraph
                                text={Service.name}
                                variant={'label'}
                                data_aos={Service.data_aos}
                                data_aos_delay={Service.data_aos_delay}
                            />
                            <Paragraph
                                text={Service.caption}
                                variant={'base'}
                                className={'font-thin mt-2'}
                                data_aos={Service.data_aos}
                                data_aos_delay={Service.data_aos_delay}
                            />
                        </li>
                    </ul>
                ))}
            </TwoColumnGrid>

            {/* <CurrentlyWorkingOn src={'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164727/Daniel/IMG_4854_ednbr2.jpg'} /> */}

            <DesignSuccess />
        </Container>
    )
}

export default About
