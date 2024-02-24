import React, { useState } from 'react'
import ActionAreaCard from '../../components/ActionAreaCard';
import Section from '../../layout/container/Section';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    const projectsData = [
        {
            id: 1,
            title: 'StoqHive',
            description: 'Business Management System',
            year: '(2024)',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671144325/samples/landscapes/architecture-signs.jpg',
        },
        {
            id: 2,
            title: 'iWallet',
            description: 'Description for Project 2...',
            year: '(2002)',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671144324/samples/animals/three-dogs.jpg',

        },
        {
            id: 23,
            title: 'Project 3',
            description: 'Description for Project 3...',
            year: '(2002)',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671144329/samples/food/spices.jpg',
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Description for Project 4...',
            year: '(2002)',
            url: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',
        },
    ];

    return (
        <Section>
            <section className='lg:space-y-20 space-y-10'>
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
                                customHeight={'80vh'}
                            />
                        </div>
                    ))
                }
            </section>
        </Section>
    )
}

export default Projects
