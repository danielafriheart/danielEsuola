import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Awards = () => {
    const Honors = [
        {
            name: 'Career Essentials in Software Development 2024',
            caption: 'By Microsoft and LinkedIn January 24, 2024',
            data_aos: 'fade-in',
            data_aos_delay: '400'
        },
        {
            name: 'JavaScript Algorithms & Data Structures 2023',
            caption: 'This certifies that I successfully completed the JavaScript Algorithms and Data Structures, representing approximately 300 hours of work.',
            data_aos: 'fade-in',
            data_aos_delay: '500'
        },
        {
            name: 'Responsive Web Design 2022',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022.',
            data_aos: 'fade-in',
            data_aos_delay: '600'
        },

    ]

    return (
        <TwoColumnGrid header={'AWARDS & RECOGNITIONS'} caption={'Honors '} className={'uppercase header'}>
            {Honors.map(award => (
                <ul key={award.name}>
                    <li className='mb-8'>
                        <Paragraph
                            text={award.name}
                            variant={'paragraph'}
                        />
                        <Paragraph
                            text={award.caption}
                            variant={'caption'}
                            className={'font-thin mt-2'}
                        />
                    </li>
                </ul>
            ))}
        </TwoColumnGrid>
    )
}

export default Awards
