import React from 'react'
import Section from '../layout/container/Section'
import MediaCard from './MediaCard'
import Paragraph from '../layout/typography/Paragraph'

const Gallery = ({ Src }) => {
    const Src_one = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164727/Daniel/IMG_4854_ednbr2.jpg"
    const Src_two = "https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164392/Daniel/IMG_4811_jge1as.jpg"
    return (
        <Section className={'py-0 pt-16'}>
         <div className='grid lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] gap-5'>
                <div className='lg:w-full lg:h-full h-[50vh] lg:flex hidden bg-[url(`${Src_two}`)]'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mV8MWjhvZvk?si=xzl53vKNad8M--KI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <MediaCard imageSrc={Src_one} />
                </div>
            </div>
        </Section>
    )
}

export default Gallery
