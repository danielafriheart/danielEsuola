import React from 'react'
import BasicAccordion from './BasicAccordion'
import Header from '../layout/typography/Header'
import Paragraph from '../layout/typography/Paragraph'
import Section from '../layout/container/Section'

const Services = () => {
    const WHAT_I_DO = [
        {
            service: 'Front End Development / Engineering',
            caption: 'I specialize in scalable front-end web application development, including planning, design, build, testing and maintenance..',
        },
        {
            service: 'Interaction Design & Animation',
            caption: 'I collaborate with designers to execute web app and design system animations and interactions.',
        },
        {
            service: 'Creative Implementation',
            caption: 'I design optimized layouts and interactions for performance and usability.',
        },

    ]
    return (
        <Section>
            <div className='flex flex-col gap-10'>
                <Paragraph variant={'base'} text={'Services'} className={'font-thin'}/>
            </div>

            <div>
                <Header text={'SERVICES'} />

                <table className='w-full'>
                    <tbody>
                        {
                            WHAT_I_DO.map((SERVICES, id) => {
                                return (
                                    <BasicAccordion
                                        key={id}
                                        accordionTitle={SERVICES.service}
                                        accordionContent={SERVICES.caption}
                                        // accordionNumber={`0${id + 1}`} //Accordion Number
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Section >
    )
}

export default Services
