import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectData'; // Import projectsData

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData.find(project => project.id === parseInt(projectId));

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="project-data">
            <h2>{project.title}</h2>
            {/* Render other details */}
        </div>
    );
};

export default ProjectDetail;
