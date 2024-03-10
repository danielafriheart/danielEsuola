import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Awards = () => {
    const Honors = [
        {
            name: 'Career Essentials in Software Development 2024',
            caption: 'By Microsoft and LinkedIn January 24, 2024',
        },
        {
            name: 'JavaScript Algorithms & Data Structures 2023',
            caption: 'This certifies that I successfully completed the JavaScript Algorithms and Data Structures, representing approximately 300 hours of work.',
        },
        {
            name: 'Responsive Web Design 2022',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022.',
        },
    ]

    return (
        <TwoColumnGrid header={'AWARDS AND RECOGNITION'} caption={'(001) '} className={'uppercase header'}>
            {Honors.map(award => (
                <ul key={award.name}>
                    <li className='mb-8'>
                        <Paragraph
                            delay={100}
                            text={award.name}
                            variant={'paragraph_md'}
                        />
                        <Paragraph
                            delay={200}
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
