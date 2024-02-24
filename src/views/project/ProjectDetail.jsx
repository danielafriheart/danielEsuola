import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found</p>;
  }

  // ... use project data and render details

  return (
    <div className="project-data">
      <h2>{project.title}</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique voluptate pariatur mollitia ea earum voluptas fugiat distinctio quas officia aperiam minima unde nulla repudiandae voluptatem consectetur officiis, totam quam.
      {/* ... */}
    </div>
  );
};

export default ProjectDetail;