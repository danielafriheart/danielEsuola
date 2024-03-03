import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import RouteLinks from '../layout/typography/RouteLinks'
import Container from '../layout/container/Container'
import SocialMedias from './SocialMedias'
import EmailAddress from './email/EmailAddress'


const Contact = () => {

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorCopy = () => {
        cursor.classList.add('changeCursorCopy')
    }
    const defaultCursor = () => {
        cursor.classList.remove('changeCursorCopy')
    }

    return (
        <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
            <Section className={'min-h-screen h-fit flex flex-col justify-between bg-Black contact'}>
                <section className='z-50 lg:space-y-10 bg-[url(`${Daniel}`)]'>

                    <div className='lg:space-y-14 space-y-10 mb-20 lg:mb-0'>
                        <a href="/" rel='noreferrer noopener' className='text-white/50 border border-white/50 hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center space-x-10  px-5 rounded-full w-fit'
                            data_aos={'fade-left'}
                            data_aos_delay={'20'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                            <Paragraph variant={'base'} className={'font-thin text-white'} text={'Home'} />
                        </a>

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
                                    // className={'lg:w-fit lg:text-[6rem] md:text-[5rem]'}
                                    className={'text-white lg:text-[9rem] md:text-[5rem] text-4xl uppercase underline leading-tight'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 space-y-3 lg:space-y-0 lg:mb-0 mb-20'>
                        <Paragraph
                            data_aos={'fade-in'}
                            data_aos_delay={'20'}
                            text={"Send me an email or get in touch with me on any of my socials."}
                            greyText={"Let's start creating magic."}
                            className={'text-white font-thin'} variant={'paragraph_md'}
                        />
                        <div className='w-full ml-auto flex flex-col justify-end space-y-5 lg:w-1/2'>
                            {SocialMedias.map(social => (
                                <RouteLinks
                                    key={social.platform}
                                    linkTitle={social.platform}
                                    routeLocation={social.href}
                                    routeStyleType={'icon'}
                                    className={'transition-all duration-300 text-white '}
                                    variant={'caption'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                />
                            ))}
                        </div>
                    </div>

                </section>
                <Paragraph trailingText={'2024 Esuola Daniel Okikiola'} variant={'base'} className={'font-thin lg:mt-auto lg:my-0 my-5 text-white'} />
            </Section>
        </Container >
    )
}

export default Contact
