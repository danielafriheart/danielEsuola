import React from 'react'
import Section from '../layout/container/Section'
import MediaCard from '../components/MediaCard'

const Gallery = ({Src}) => {
    const Src_one ="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164727/Daniel/IMG_4854_ednbr2.jpg"
    const Src_two ="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164392/Daniel/IMG_4811_jge1as.jpg"
    return (
        <Section>
            <div className='grid lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] gap-6'>
                <div><MediaCard imageSrc={Src_one} /></div>
                <div><MediaCard imageSrc={Src_two} /></div>
            </div>
        </Section>
    )
}

export default Gallery
