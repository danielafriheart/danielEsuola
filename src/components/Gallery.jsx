import React from 'react'
import Section from '../layout/container/Section'
import MediaCard from './MediaCard'
import Paragraph from '../layout/typography/Paragraph'

const Gallery = ({ Src }) => {
    const Src_one = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164727/Daniel/IMG_4854_ednbr2.jpg"
    const Src_two = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164392/Daniel/IMG_4811_jge1as.jpg"
    return (
        <Section className={'py-0'}>
            <div className='grid lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] gap-5'>
                <div
                    data-aos="fade-in"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-sine"
                >
                    <MediaCard imageSrc={Src_one}></MediaCard>
                </div>
                <div
                    data-aos="fade-in"
                    data-aos-delay="600"
                    data-aos-easing="ease-in-sine"
                >
                    <MediaCard imageSrc={Src_two} >
                        <Paragraph variant={'base'}
                            text={'"As humans, I believe our sole purpose is to create"'}
                            className={'font-thin text-white w-1/2'}
                        />
                    </MediaCard>
                </div>
            </div>
        </Section>
    )
}

export default Gallery
