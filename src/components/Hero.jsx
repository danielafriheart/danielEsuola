import React from 'react'
import Header from '../layout/typography/Header'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Button from '../layout/container/Button'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'

const Hero = () => {


    return (
        // <Section className={'lg:h-[80vh] md:h-[70vh] h-[60vh] flex flex-col justify-center'}>
        //     <div className='flex flex-col justify-center lg:space-y-10 space-y-10 px-0'>


        //         <Paragraph text={'Developer · Software Developer'} variant={'base'} className={'font-thin'} />

        //         <span className='lg:w-[80vw] w-full'>
        //             <Header leadingText={"Passionate Creative Developer "} greyText={" -Esuola Daniel Okikiola"} />
        //         </span>

        //         <div>
        //             <Button
        //                 href={'/contact'}
        //                 btnText={'Contact'}
        //                 variant={'black'}
        //             />
        //         </div>

        //     </div>

        // </Section>

        <Section className={'lg:min-h-[60vh] md:h-[70vh] h-[60vh] flex flex-col justify-center'}>
            <div className='flex flex-col justify-center lg:space-y-6 space-y-8 lg:w-[50vw]'>
                {/* <Paragraph text={'About Me'} variant={'base'} className={'font-thin'} /> */}
                <Header leadingText={'Ókíkìọlá'} />
                <Paragraph text={"I support Designers & Agencies with "} greyText={'Creative'} trailingText={' Development. 👨🏾‍💻'} variant={'paragraph'} />

                <Paragraph text={"I'm a creative developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia."} variant={'base'} className={'font-thin'} />

                <Paragraph text={"Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics."} variant={'base'} className={'font-thin'} />
            </div>
        </Section>

    )
}

export default Hero
