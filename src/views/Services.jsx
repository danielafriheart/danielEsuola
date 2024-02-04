import React from 'react'
import BasicAccordion from '../components/BasicAccordion'
import Paragraph from '../layout/typography/Paragraph'
import Section from '../layout/container/Section'

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
        <Section className={'space-y-5'}>
            <Paragraph variant={'base'} text={'Services'} className={'font-thin'} />
            <table className='w-full'>
                <tbody>
                    {
                        Services.map((Service, id) => {
                            return (
                                <BasicAccordion
                                    key={id}
                                    accordionTitle={Service.name}
                                    accordionContent={Service.caption}
                                // accordionNumber={`0${id + 1}`} //Accordion Number
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </Section >
    )
}

export default Services
