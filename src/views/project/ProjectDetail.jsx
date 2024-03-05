import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './ProjectData'; // Import projectsData
import Section from '../../layout/container/Section';
import Header from '../../layout/typography/Header';
import Paragraph from '../../layout/typography/Paragraph';
import Error from '../../views/Error';
import MediaCover from '../../components/MediaCard';
import DesignSuccess from '../../components/DesignSuccess';
import Container from '../../layout/container/Container';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <Error />;
  }

  return (
    <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
      <Section className={'lg:space-y-24 space-y-10'}>
        <div className='flex flex-col justify-center lg:space-y-10 space-y-10 '>
          <header className='flex gap-10'>
            <div>
              <Paragraph variant={'base'} greyText={'Industry'} />
              <Paragraph variant={'base'} text={project.industry || "Project Industry here"} />
            </div>
            <div>
              <Paragraph variant={'base'} greyText={'Client'} />
              <Paragraph variant={'base'} text={project.client || "Project Client here"} />
            </div>
          </header>
        </div>

        <div className=''>
          <Header leadingText={project.writeUp.header} className={'uppercase'}/>
        </div>

        <MediaCover imageSrc={project.imageUrl} customHeight={'70vh'} />

        <div className='mx-auto lg:w-[80vw] space-y-10'>
          <Header leadingText={project.writeUp.article || "Error:( article for this project isn't available in project data"} className={'text-3xl'}/>
          <Paragraph variant={'paragraph_md'} text={project.writeUp.content || "Error:( content for this project isn't available in project data"} />
          {
            project.writeUp.content_1 ?
              <Paragraph variant={'paragraph_md'} text={project.writeUp.content_1} />
              : null
          }
        </div>
      </Section>

      {/* Gallery Area ===>>>>>>>>>> */}
      <Section className={'space-y-20'}>
          <MediaCover imageSrc={project.gallery.one} customHeight={'70vh'} />
          <MediaCover imageSrc={project.gallery.two} customHeight={'70vh'} />
      </Section>

      <DesignSuccess />
    </Container>
  );
};

export default ProjectDetail;
