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
                <div key={id} className='flex space-x-10'>
                    <Paragraph text={`0${id + 1}`} variant={'paragraph_md'}
                        data_aos={Service.data_aos}
                        data_aos_delay={Service.data_aos_delay}
                    />
                    <ul>
                        <li className='mb-8'>
                            <Paragraph
                                text={Service.name} variant={'label'}
                                data_aos={Service.data_aos}
                                data_aos_delay={Service.data_aos_delay}
                                className={'font-medium'}
                            />
                            <Paragraph
                                text={Service.caption} variant={'label'} 
                                className={'mt-3 font-thin'}
                                data_aos={Service.data_aos}
                                data_aos_delay={Service.data_aos_delay}
                            />
                        </li>
                    </ul>
                </div>
            ))}
        </TwoColumnGrid>
    )
}

export default Services
