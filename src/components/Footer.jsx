import React from 'react'
import Section from '../layout/container/Section'
import Paragraph from '../layout/typography/Paragraph'
import Header from '../layout/typography/Header'
import Button from '../layout/container/Button'

const Footer = () => {
    return (
        <footer className='bg-black'>
            <Section className={' min-h-[90vh] flex flex-col justify-between'}>
                <section className='grid lg:grid-cols-[2fr,3fr]'>
                    <div className='space-y-14'>
                        <Paragraph variant={'base'} className={'font-thin text-white'} text={'Contact'} />
                        <Header className={'text-white'} leadingText={"Let's start creating together"} />
                        <Button variant={'white'} btnText={"Let's talk"} href={'/contact'} />
                    </div>
                    <div></div>
                </section>
                <Paragraph trailingText={'2023 Pearl Framer template crafted with love by Dawid Pietrasiak'} className={'text-gray-400 font-thin mt-auto'} />
            </Section>
        </footer>
    )
}

export default Footer
