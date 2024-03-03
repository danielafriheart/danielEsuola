import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import RouteLinks from '../layout/typography/RouteLinks'
import SocialMedias from './SocialMedias'
import EmailAddress from './email/EmailAddress'

const Footer = () => {

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorCopy = () => {
        cursor.classList.add('changeCursorCopy')
    }
    const defaultCursor = () => {
        cursor.classList.remove('changeCursorCopy')
    }

    return (
        <footer className='lg:pt-20 lg:pb-40 lg:h-screen'>
            <Section className={'flex flex-col justify-between h-full space-y-24'}>
                <section className='z-50 lg:space-y-10 bg-[url(`${Daniel}`)]'>

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
                                    className={'lg:text-[7rem] text-7xl md:text-Header-md text-Paragraph-md uppercase underline leading-tight header'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 space-y-14 lg:space-y-0 lg:mb-0 mb-20'>
                        <Paragraph
                            data_aos={'fade-in'}
                            data_aos_delay={'20'}
                            text={"Send me an email or get in touch with me on any of my socials. Let's start creating magic."}
                            variant={'paragraph_md'}
                            className={'my-auto'}
                        />
                        <div className='w-full ml-auto flex flex-col justify-end space-y-5 lg:w-1/2'>
                            <SocialMedias className='text-black'/>
                        </div>
                    </div>

                </section>
                <Paragraph trailingText={'2024 Esuola Daniel Okikiola'} className={'font-thin lg:mt-auto lg:my-0 my-5'} />
            </Section>
        </footer>
    )
}

export default Footer
