import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import Container from '../layout/container/Container';
import Header from '../layout/typography/Header';
import Paragraph from '../layout/typography/Paragraph';

export default function Preloader() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container title={'Loading'} description={"Esuola Daniel's Portfolio Website"} className={'cursor-wait bg-Black'} >
            <section className='w-full h-screen top-0'>
                <div className="w-[85vw] sm:w-[95vw] lg:w-[90vw] mx-auto flex flex-col justify-between py-20 h-full">
                    <div className='text-right'>
                        <Paragraph text={'Daniel Esuola'} className={'text-White header'} variant={'paragraph'}/>
                        <Paragraph text={`Portfolio  © ${year}`} className={'text-White header'} variant={'paragraph'}/>
                    </div>
                    <div>
                        <Paragraph text={'"A journey of Creativity & Exploration"'} className={'text-White header'} variant={'paragraph'} />
                    </div>
                </div>
            </section>
        </Container>
    )
}
