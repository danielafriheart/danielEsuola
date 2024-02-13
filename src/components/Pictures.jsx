import React from 'react'
import Section from '../layout/container/Section';
import MediaCard from './MediaCard'


function Gallery() {



    const galleryImages = [
        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',

        // 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072612/Daniel/unsplash_ztdvIEjyOdY_nlemmv.png',

        // 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_17rSt_Qso-s_vvosxz.png',

        // 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072604/Daniel/unsplash_LxBMsvUPAgo_mzacvf.png',

        // 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_QemyfppHkU8_w0rfpo.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072602/Daniel/unsplash_pyMbXQhPK0k_kxgyib.png',

        // 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072606/Daniel/unsplash_gy08FXeM2L4_atywzt.png',

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
                <div key={i} className={`grid lg:grid-cols-4 lg:space-x-5 lg:space-y-0 space-y-5`}>
                    {row.map((img, image) => (
                        <div
                            key={image}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                // backgroundRepeat:'no-repeat',
                                backgroundAttachment:'fixed',
                                // background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                            className='rounded-xl h-[80vh] bg-fixed'
                            data-aos="fade-in"
                            data-aos-delay="500"
                            data-aos-easing="ease-in-sine"
                        >
                        </div>
                    ))}
                </div>
            ))}
        </Section>
    )
}

export default Gallery