import React, { useState } from 'react'
import ActionAreaCard from '../components/ActionAreaCard';
import Section from '../layout/container/Section';

const Projects = () => {

    const projectsData = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description for Project 1...',
            technologies: ['React', 'JavaScript', 'CSS'],
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description for Project 2...',
            technologies: ['Node.js', 'Express', 'MongoDB'],
        },
        {
            id: 23,
            title: 'Project 3',
            description: 'Description for Project 3...',
            technologies: ['Node.js', 'Express', 'MongoDB'],
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Description for Project 4...',
            technologies: ['Node.js', 'Express', 'MongoDB'],
        },
        // Add more projects as needed
    ];

    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const handleProjectClick = (projectId) => {
        setSelectedProjectId(projectId);
    };

    return (
        <Section>
            <section className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-12 md:gap-10'>
                {
                    projectsData.map(project => (
                        <div className=''>
                            <ActionAreaCard
                                caption={project.title}
                                label={project.description}
                                key={project.id}
                                onClick={() => handleProjectClick(project.id)}
                            />
                        </div>
                    ))
                }
            </section>
        </Section>
    )
}

export default Projects
