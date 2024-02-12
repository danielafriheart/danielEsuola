import React, { useState } from 'react'
import ActionAreaCard from './ActionAreaCard';
import Section from '../layout/container/Section';

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            title: 'StoqHive',
            description: 'Business Management System',
            year: '2024',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',

        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description for Project 2...',
            year: '2002',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072602/Daniel/unsplash_pyMbXQhPK0k_kxgyib.png',

        },
        {
            id: 23,
            title: 'Project 3',
            description: 'Description for Project 3...',
            year: '2002',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_3ZvHsFiZyME_aslnv3.png',

        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Description for Project 4...',
            year: '2002',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',
        },

    ];

    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const handleProjectClick = (projectId) => {
        setSelectedProjectId(projectId);
    };

    return (
        <Section>
            {/* <section className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-8 md:gap-10'> */}
            <section className='space-y-40'>
                {
                    projectsData.map(project => (
                        <div>
                            <ActionAreaCard
                                src={project.url}
                                caption={project.title}
                                label={project.description}
                                year={project.year}
                                key={project.id}
                                onClick={() => handleProjectClick(project.id)}
                                customHeight={'75vh'}
                            />
                        </div>
                    ))
                }
            </section>
            {/* </section> */}
        </Section>
    )
}

export default Projects
