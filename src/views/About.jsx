import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import DesignSuccess from './DesignSuccess'
import Gallery from './Gallery'
import MediaCard from '../components/MediaCard'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'


const About = () => {
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
                <MediaCard imageSrc={"https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/nkhzPF2aG9jHzZ0Tx12GETeVy0_nrbmax.webp"} customHeight={'65vh'} />
            </Section>

            <TwoColumnGrid caption={'Services'} paragrahText={'Services are designed with simplicity and '} greyText={' effectiveness in mind.'} trailingText={' We offer a comprehensive range of solutions tailored to meet your design needs.'}>


            </TwoColumnGrid>
        </>
    )
}

export default About
