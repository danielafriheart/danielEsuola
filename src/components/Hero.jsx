import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'

const Hero = () => {


    return (
        <Section className={'lg:min-h-[50vh] h-fit md:h-[70vh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8 lg:w-[50vw]'>

                <Header leadingText={'Ókíkìọlá'} />

                <Paragraph
                    data_aos_delay={'10'}
                    text={"I support Designers & Agencies with "}
                    greyText={'Creative'}
                    trailingText={' Development.'}
                    variant={'paragraph'}
                />

                <Paragraph
                    data_aos_delay={'20'}
                    text={"I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and large enterprises including Osome and StoqHive."} variant={'base'} className={'font-thin'} />

                <Paragraph
                    data_aos_delay={'30'}
                    text={"Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics."} variant={'base'} className={'font-thin'}
                />

            </div>
        </Section>

    )
}

export default Hero
