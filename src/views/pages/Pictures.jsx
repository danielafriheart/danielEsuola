import React from 'react'
import Section from '../../layout/container/Section';
import MediaCard from '../../components/MediaCard'

function Gallery() {

    const galleryImages = [
        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',
        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072602/Daniel/unsplash_pyMbXQhPK0k_kxgyib.png',
        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_3ZvHsFiZyME_aslnv3.png',
        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_5f68N0n4Ef8_qybid5.png',
    ]

    /* The code is creating rows of images for the gallery. */
    const rows = [];
    const rowSize = 4;
    for (let i = 0; i < galleryImages.length; i += rowSize) {
        const row = galleryImages.slice(i, i + rowSize);
        rows.push(row);
    }

    return (
        <Section>
            {rows.map((row, i) => (
                <div key={i} className={`grid lg:grid-cols-4 gap-x-5 lg:space-y-0 space-y-5`}>
                    {row.map((img, image) => (
                        <MediaCard
                            imageSrc={img}
                            customHeight={ '80vh'}
                        />
                    ))}
                </div>
            ))}
        </Section>
    )
}

export default Gallery