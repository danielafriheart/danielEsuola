import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectData'; // Import projectsData
import Section from '../../layout/container/Section';
import Header from '../../layout/typography/Header';
import Paragraph from '../../layout/typography/Paragraph';
import Error from '../../views/Error';
import MediaCover from '../../components/MediaCard';
import TwoColumnGrid from '../../layout/container/TwoColumnGrid';
import DesignSuccess from '../../components/DesignSuccess';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <Error />;
  }

  return (
    <>
      <Section className={'lg:space-y-24 space-y-10'}>
        <div className='flex flex-col justify-center lg:space-y-20 space-y-10 lg:pt-20'>
          <header className='flex gap-10'>
            <div>
              <Paragraph variant={'base'} greyText={'Industry'} />
              <Paragraph variant={'base'} text={project.industry} />
            </div>
            <div>
              <Paragraph variant={'base'} greyText={'Client'} />
              <Paragraph variant={'base'} text={project.client} />
            </div>
          </header>
        </div>

        <div className='lg:w-[50vw]'>
          <Header leadingText={project.writeUp.header} />
        </div>

        <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'}/>

        <div className='mx-auto lg:w-[80%] space-y-10'>
          <Header leadingText={project.writeUp.article} />
          <Paragraph variant={'paragraph_md'} className={'font-thin'} text={project.writeUp.content} />
          <Paragraph variant={'paragraph_md'} className={'font-thin'} text={project.writeUp.content_1} />
        </div>
      </Section>

      <Section className={'space-y-10'}>
        <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'}/>
        <div className='grid grid-cols-2 lg:space-x-10'>
          <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'}/>
          <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'}/>
        </div>
        <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'}/>
      </Section>

      <DesignSuccess/>
    </>
  );
};

export default ProjectDetail;
