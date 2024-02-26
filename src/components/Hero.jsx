import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'

const Hero = () => {


    return (
        <Section className={'min-h-fit lg:h-fit lg:pt-40 md:h-[70dvh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8 lg:w-[55vw]'>

                {/* <Header leadingText={'Ókíkìọlá'} /> */}
                <Header leadingText={'Esuola Daniel'} greyText={' Okikiola'} className={'font-medium'}/>

                <Paragraph
                    text={"I support Designers & Agencies with "}
                    greyText={'Creative'}
                    trailingText={' Development.'}
                    variant={'paragraph'}
                />

                <Paragraph
                    text={"I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and large enterprises including Osome and StoqHive."} variant={'label'} className={'font-thin'} />

                <Paragraph
                    text={"Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics."} variant={'label'} className={'font-thin'}
                />

            </div>
        </Section>

    )
}

export default Hero
