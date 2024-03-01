import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import RouteLinks from '../layout/typography/RouteLinks'
import SocialMedias from './SocialMedias'

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
                <section className='lg:flex'>
                    <div className='lg:space-y-14 space-y-10 mb-10 lg:mb-0'>
                        <Paragraph variant={'base'} className={'font-thin'} text={'Get in touch'} />
                        <div
                            onMouseEnter={changeCursorCopy}
                            onMouseLeave={defaultCursor}
                        >
                            <Header leadingText={"ESUOLADANIEL002 @GMAIL.COM"}/>
                        </div>
                        <Paragraph
                            data_aos={'fade-in'}
                            data_aos_delay={'300'}
                            text={"Send me an email or get in touch with me on any of my socials."}
                            greyText={"Let's start creating magic."}
                           variant={'paragraph_md'}
                        />
                    </div>
                    <div className='lg:ml-40 space-y-3 lg:space-y-0 mb-20 lg:mb-0 w-full'>
                        <div className='space-y-3 lg:w-[80%] w-full ml-auto'>
                            {
                                SocialMedias.map(social => (
                                    <RouteLinks
                                        key={social.platform}
                                        linkTitle={social.platform}
                                        routeLocation={social.href}
                                        routeStyleType={'icon'}
                                        className={'transition-all duration-300'}
                                        variant={'caption'}
                                        hoverState={'none'}
                                        targetState={'_blank'}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <Paragraph trailingText={'2024 Esuola Daniel Okikiola'} className={'font-thin lg:mt-auto lg:my-0 my-5'} />
            </Section>
        </footer>
    )
}

export default Footer
