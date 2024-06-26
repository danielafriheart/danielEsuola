import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import RouteLinks from '../layout/typography/RouteLinks'
import Container from '../layout/container/Container'
import SocialMedias from './SocialMedias'
import EmailAddress from './email/EmailAddress'
import Footer from './Footer'


const Contact = () => {

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorCopy = () => {
        cursor.classList.add('changeCursorCopy')
    }
    const defaultCursor = () => {
        cursor.classList.remove('changeCursorCopy')
    }

    return (
        <Container title={'Get in touch'} description={"Esuola Daniel's Portfolio Website"} className={'bg-[#C4DFD9] pt-32 lg:h-fit md:h-fit h-screen'}>
            <Section className={'flex flex-col justify-between h-full space-y-24'}>
                <section className='z-20 lg:gap-y-48 h-full lg:flex lg:flex-col-reverse'>

                    <div className='lg:space-y-14 space-y-10 mb-20 lg:mb-0'>
                        <div
                            onMouseEnter={changeCursorCopy}
                            onMouseLeave={defaultCursor}
                        >
                            {EmailAddress.map(Email => (
                                <RouteLinks
                                    key={Email.platform}
                                    linkTitle={Email.platform}
                                    routeLocation={`mailto: ${Email.mailTo}`}
                                    routeStyleType={'noIcon'}
                                    className={'lg:text-[10rem]  text-[3.5em] md:text-[8rem] uppercase underline leading-tight header textResponsiveness'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                    delay={100}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse gap-y-14 lg:space-y-0 lg:mb-0 mb-20'>
                        <div className='w-full mr-auto flex flex-col justify-end space-y-5 lg:w-1/3'>
                            <SocialMedias className='text-black' />
                        </div>
                        <Paragraph
                            text={"Send me an email or get in touch with me on any of my socials. Let's start creating magic."}
                            variant={'label'}
                            className={'lg:my-auto lg:w-1/2 ml-auto'}
                            delay={200}
                        />
                    </div>
                </section>
            </Section>
        </Container >
    )
}

export default Contact

