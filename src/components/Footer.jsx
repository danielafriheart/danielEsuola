import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Button from '../layout/container/Button'
import RouteLinks from '../layout/typography/RouteLinks'
import { useLocation } from 'react-router-dom'

const Footer = () => {

    // const pages = [
    //     {
    //         name: 'Home', href: '/',
    //         data_aos: 'fade-in',
    //         data_aos_delay: '0'
    //     },
    //     {
    //         name: 'Work', href: '/projects',
    //         data_aos: 'fade-in',
    //         data_aos_delay: '100'
    //     },
    //     {
    //         name: 'About', href: '/about',
    //         data_aos: 'fade-in',
    //         data_aos_delay: '150',
    //     },
    //     {
    //         name: 'Contact', href: '/contact',
    //         data_aos: 'fade-in',
    //         data_aos_delay: '200'
    //     }
    // ]

    const social_links = [
        {
            name: 'YouTube',
            href: 'https://www.tiktok.com/@danielafriheart?lang=en',
            data_aos: 'fade-in',
            data_aos_delay: '100'
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/DanielAfriheart',
            data_aos: 'fade-in',
            data_aos_delay: '100'
        },
        {
            name: 'Instagram',
            href: '/projects',
            data_aos: 'fade-in',
            data_aos_delay: '150'
        },
        {
            name: 'Linkedln',
            href: 'https://www.linkedin.com/in/daniel-esuola/',
            data_aos: 'fade-in',
            data_aos_delay: '200'
        },
    ]

    const location = useLocation();

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorCopy = () => {
        cursor.classList.add('changeCursorCopy')
    }
    const defaultCursor = () => {
        cursor.classList.remove('changeCursorCopy')
    }


    return (
        <footer className='lg:pt-20 lg:pb-40 bg-black lg:h-screen'>
            <Section className={'flex flex-col justify-between h-full'}>
                <section className='grid lg:grid-cols-[55%,45%]'>
                    <div className='lg:space-y-14 space-y-10 mb-10 lg:mb-0'>
                        <Paragraph variant={'base'} className={'font-thin text-white'} text={'Get in touch'} />
                        <div
                            onMouseEnter={changeCursorCopy}
                            onMouseLeave={defaultCursor}
                        >
                            <Header leadingText={"esuoladaniel002 @gmail.com"} className={'text-white'}/>
                        </div>
                        <Paragraph
                            data_aos={'fade-in'}
                            data_aos_delay={'300'}
                            text={"Send me an email or get in touch with me on any of my socials."}
                            greyText={"Let's start creating magic."}
                           variant={'paragraph_md'}
                           className={'text-white'}
                        />
                        {/* <Button variant={'black'} btnText={"Let's talk"} href={'/contact'} /> */}
                    </div>
                    <div className='grid lg:grid-cols-[50%,50%] lg:ml-40 space-y-3 lg:space-y-0 mb-20 lg:mb-0'>
                        <div className='space-y-3 lg:mx-auto'>
                            {/* {
                                pages.map(page => (
                                    <RouteLinks
                                        data_aos={page.data_aos}
                                        data_aos_delay={page.data_aos_delay}
                                        key={page.name}
                                        linkTitle={page.name}
                                        routeLocation={page.href}
                                        routeStyleType={'noIcon'}
                                        className={'transition-all duration-300 font-thin'}
                                        variant={'caption'}
                                        hoverState={`${location.pathname === page.href ? 'always' : 'hover'}`}
                                    />
                                ))
                            } */}
                        </div>
                        <div className='space-y-3 lg:w-[80%] w-full ml-auto'>
                            {
                                social_links.map(social => (
                                    <RouteLinks
                                        data_aos={social.data_aos}
                                        data_aos_delay={social.data_aos_delay}
                                        key={social.name}
                                        linkTitle={social.name}
                                        routeLocation={social.href}
                                        routeStyleType={'icon'}
                                        className={'transition-all duration-300 font-thin text-white'}
                                        variant={'caption'}
                                        hoverState={'none'}
                                        targetState={'_blank'}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
                {/* <Paragraph trailingText={'2024 Esuola Daniel Okikiola'} className={'font-thin lg:mt-auto lg:my-0 my-5'} /> */}
            </Section>
        </footer>
    )
}

export default Footer
