import React from 'react'
import Section from '../layout/container/Section'
import MediaCard from '../components/MediaCard'

const Gallery = () => {
    const Src = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1705678476/StoqHive/0h67TFuk7bDRVujjwt6jBREPseM_bv6zxx.png"
    return (
        <Section>
            <div className='grid lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] gap-6'>
                <div><MediaCard imageSrc={Src} /></div>
                <div><MediaCard imageSrc={Src} /></div>
            </div>
        </Section>
    )
}

export default Gallery
