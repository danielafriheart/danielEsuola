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
        <Container title={'Esuola ®'} description={"Esuola Daniel's Portfolio Website"} className={'bg-[#C4DFD9] pt-32'}>
            {/* <Section className={'h-fit flex flex-col justify-between contact'}>
                <section className='z-50 lg:space-y-10 bg-[url(`${Daniel}`)]'>
                    <a href="/" rel='noreferrer noopener' className=' transition-all duration-300 flex items-center space-x-10  px-5 rounded-full w-fit border border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <Paragraph variant={'base'} className={'font-thin]'} text={'Home'} />
                    </a>
                </section>
            </Section> */}
            <Section className={'flex flex-col justify-between h-full space-y-24'}>
                <section className='z-50 lg:gap-y-48 h-full lg:flex lg:flex-col-reverse'>

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
                                    className={'lg:text-[10rem] text-7xl md:text-Header-md text-Paragraph-md uppercase underline leading-tight header textResponsiveness'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                    delay={100}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 space-y-14 lg:space-y-0 lg:mb-0 mb-20'>
                        <div className='w-full mr-auto flex flex-col justify-end space-y-5 lg:w-1/3'>
                            <SocialMedias className='text-black' />
                        </div>
                        <Paragraph
                            text={"Send me an email or get in touch with me on any of my socials. Let's start creating magic."}
                            variant={'label'}
                            className={'my-auto lg:w-1/2 ml-auto'}
                            delay={200}
                        />
                    </div>
                </section>
            </Section>
        </Container >
    )
}

export default Contact

