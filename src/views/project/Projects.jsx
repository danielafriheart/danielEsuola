import React from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from '../../components/ActionAreaCard';
import Section from '../../layout/container/Section';
import projectsData from './ProjectData'; // Import projectsData

const Projects = () => {
    return (
        <Section>
            <section className='lg:space-y-24 space-y-20'>
                {
                    projectsData.map(project => (
                        <div key={project.id}>
                            <Link to={`/projects/${project.id}`}>
                                <ActionAreaCard
                                    src={project.imageUrl}
                                    caption={project.name}
                                    label={project.writeUp.article}
                                    year={project.year}
                                    customHeight={'85vh'}
                                />
                            </Link>
                        </div>
                    ))
                }
            </section>
        </Section>
    )
}

export default Projects;
