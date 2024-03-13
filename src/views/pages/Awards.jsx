import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'

const Awards = () => {
    const Honors = [
        {
            year: '2024',
            award: 'Career Essentials in Software Development',
            platform: 'Microsoft & Linkedln',
            caption: 'By Microsoft and LinkedIn January 24, 2024',
        },
        {
            year: '2023',
            award: 'JavaScript Algorithms & Data Structures',
            platform: 'FreeCodeCamp',
            caption: 'This certifies that I successfully completed the JavaScript Algorithms and Data Structures, representing approximately 300 hours of work.',
        },
        {
            year: '2022',
            award: 'Responsive Web Design',
            platform: 'FreeCodeCamp',
            caption: 'This certifies that I successfully completed the Responsive Web Design Developer Certification on January 25, 2022.',
        },
    ]

    const TABLE_STYLE = 'lg:py-10 md:py-5 py-2 w-full'

    return (
        <TwoColumnGrid header={'Awards & Recognition'} caption={'(001) '} className={'uppercase header'}>
            <table className='w-full mt-20 table-auto'>
                <thead>
                    <tr className='lg:flex md:flex hidden text-left border-black/30 border-b '>
                        <th className='pb-10 w-full'> <Paragraph text={'PLATFORM'} variant={'label'} /> </th>
                        <th className='pb-10 w-full'> <Paragraph text={'AWARD'} variant={'label'} /> </th>
                        <th className='pb-10 w-full'> <Paragraph text={'YEAR'} variant={'label'} className={'text-right'}/> </th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {Honors.map((AWARD, id) => {
                        return (
                            <tr title={AWARD.caption} key={id} className='flex md:flex-row flex-col w-full border-black/30 border-b justify-between py-5 lg:py-0'>
                                <td className={TABLE_STYLE}><Paragraph text={AWARD.platform} variant={'caption'} /></td>
                                <td className={TABLE_STYLE}><Paragraph text={AWARD.award} variant={'caption'} /></td>
                                <td className={TABLE_STYLE}><Paragraph text={AWARD.year} variant={'caption'} className={'lg:text-right'}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </TwoColumnGrid>
    )
}

export default Awards
