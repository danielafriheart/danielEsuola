import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
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
        <footer className='lg:h-screen'>
            <Section className={'flex flex-col justify-between h-full space-y-24'}>
                <section className='z-50 lg:space-y-10 h-full'>

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
                                    className={'lg:text-[10rem] text-[5rem] md:text-[7rem] uppercase underline leading-tight header textResponsiveness'}
                                    hoverState={'none'}
                                    targetState={'_blank'}
                                    delay={100}
                                />
                            ))}
                        </div>
                    </div>
 
                    <div className='grid lg:grid-cols-2 space-y-14 lg:space-y-0 lg:mb-0 mb-20'>
                        <Paragraph
                            text={"Send me an email or get in touch with me on any of my socials. Let's start creating magic."}
                            variant={'paragraph_md'}
                            className={'my-auto'}
                            delay={200}
                        />
                        <div className='w-full ml-auto flex flex-col justify-end space-y-5 lg:w-1/2'>
                            <SocialMedias className='text-black'/>
                        </div>
                    </div>
                </section>
            </Section>
        </footer>
    )
}

export default Footer
