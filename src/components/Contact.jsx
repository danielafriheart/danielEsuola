import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Button from '../layout/container/Button'
import RouteLinks from '../layout/typography/RouteLinks'
import { useLocation } from 'react-router-dom'

const Contact = () => {

    const pages = [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '/work' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ]

    const social_links = [
        { name: 'YouTube', href: 'https://www.tiktok.com/@danielafriheart?lang=en' },
        { name: 'Twitter', href: 'https://twitter.com/DanielAfriheart' },
        { name: 'Instagram', href: '/work' },
        { name: 'Linkedln', href: 'https://www.linkedin.com/in/daniel-esuola/' },
    ]
    const location = useLocation();

    return (
        <Section className={'lg:min-h-screen flex flex-col justify-between bg-[#992333]'}>
            <section className='grid lg:grid-cols-[45%,55%]'>
                <div className='lg:space-y-14 space-y-10 mb-10 lg:mb-0'>
                    <Paragraph variant={'base'} className={'font-thin text-white'} text={'Contact'} />
                    <Header leadingText={"esuoladaniel002 @gmail.com"} className={'text-white'}/>
                    <Button variant={'white'} btnText={"Email me"} href={'/contact'} />
                </div>
                <div className='grid lg:grid-cols-[50%,50%] lg:ml-40 space-y-3 lg:space-y-0'>
                    <div className=''></div>
                    <div className='space-y-3 lg:w-[80%] w-full ml-auto flex flex-col justify-end'>
                        {
                            social_links.map(social => (
                                <RouteLinks
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
            <Paragraph trailingText={'2023 Pearl Framer template crafted with love by Dawid Pietrasiak'} variant={'base'} className={'font-thin lg:mt-auto lg:my-0 my-5 text-white'} />
        </Section>
    )
}

export default Contact
