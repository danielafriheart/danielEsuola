import React from 'react'
import Paragraph from '../layout/typography/Paragraph'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'

const Services = () => {
    const Services = [
        {
            name: 'Engineering',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
        },
        {
            name: 'Branding',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
        },
        {
            name: 'Design & Animation',
            caption: 'I collaborate with designers to execute web app and design system animations and interactions.',
        },
        {
            name: 'Creative Implementation',
            caption: 'I design optimized layouts and interactions for performance and usability.',
        },

    ]
    return (
        <TwoColumnGrid caption={'Services'} paragrahText={'What I bring to the '} greyText={' Table'} trailingText={' :)'}>
            {Services.map(Service => (
                <ul>
                    <li className='mb-8'>
                        <Paragraph text={Service.name} variant={'label'} />
                        <Paragraph text={Service.caption} variant={'base'} className={'font-thin mt-2'} />
                    </li>
                </ul>
            ))}
        </TwoColumnGrid>
    )
}

export default Services
