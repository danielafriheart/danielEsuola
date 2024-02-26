import React from 'react'
import Paragraph from '../layout/typography/Paragraph'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'

const Services = () => {
    const Services = [
        {
            name: 'Engineering',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
            data_aos: 'fade-in',
            data_aos_delay: '400'
        },
        {
            name: 'Branding',
            caption: 'I specialize in scalable Front-end Web application development, including planning, design, build, testing and maintenance..',
            data_aos: 'fade-in',
            data_aos_delay: '500'
        },
        {
            name: 'Design & Animation',
            caption: 'I collaborate with designers to execute web app and design system animations and interactions.',
            data_aos: 'fade-in',
            data_aos_delay: '600'
        },
        {
            name: 'Creative Implementation',
            caption: 'I design optimized layouts and interactions for performance and usability.',
            data_aos: 'fade-in',
            data_aos_delay: '700'
        },

    ]
    return (
        <TwoColumnGrid caption={'Services'} paragrahText={'What I bring to the '} greyText={' Table'} trailingText={' :)'}>
            {Services.map((Service, id) => (
                <ul>
                    <li className='mb-8'>
                        <Paragraph
                            text={Service.name} variant={'label'}
                        />
                        <Paragraph
                            text={Service.caption} variant={'label'}
                            className={'mt-3 font-thin'}
                        />
                    </li>
                </ul>
            ))}
        </TwoColumnGrid>
    )
}

export default Services
