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
import TwoColumnGrid from '../../layout/container/TwoColumnGrid';
import RouteLinks from '../../layout/typography/RouteLinks';
import Button from '../../layout/container/Button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <Error />;
  }

  return (
    <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
      <Section className={'lg:space-y-10 space-y-10'}>
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
          <Header leadingText={project.name} className={'uppercase'} />
        </div>

        <MediaCover imageSrc={project.projectCover} customHeight={'85vh'} />

        <TwoColumnGrid
          caption={`(00${project.id})`}
          variant={'paragraph'}
          paragrahText={project.writeUp}
        >

          <RouteLinks
            linkTitle={"Visit the website's live version"}
            routeLocation={''}
            routeStyleType={'noIcon'}
            variant={'caption'}
          />

          <div className='lg:w-[60%] pt-10'>
            <ul>
              <li className='flex items-center py-6 justify-between border-black/30 border-t'>
                <Paragraph text={'Client'} variant={'caption'} />
                <Paragraph text={project.client} variant={'caption'} />
              </li>
              <li className='flex items-center py-6 justify-between border-black/30 border-y'>
                <Paragraph text={'Year'} variant={'caption'} />
                <Paragraph text={project.year} variant={'caption'} />
              </li>
              <li className='flex items-center py-6 justify-between border-black/30 border-b'>
                <Paragraph text={'Services'} variant={'caption'} />
                <Paragraph text={project.services} variant={'caption'} />
              </li>
            </ul>
          </div>

        </TwoColumnGrid>

      </Section>

      {/* Gallery Area ===>>>>>>>>>> */}
      <Section className={'space-y-10'}>
        {project.gallery.map((image, id) => (
          <MediaCover key={id} imageSrc={image} customHeight={'85vh'} />
        ))}
      </Section>

      <TwoColumnGrid>
        <Paragraph text={"Looking to grow your business through the power of great digital design? "} variant={'paragraph'} className={'lg:w-[75%]'} />
        <Paragraph text={"Reach out to get the conversation started about your digital design needs. "} variant={'paragraph'} className={'lg:w-[75%]'} />
        <div>
          <Button btnText={'Esuoladaniel002@gmail.com'} variant={'grey'} href={'mailto:esuoladaniel002@gmail.com'} />
        </div>
      </TwoColumnGrid>
    </Container>
  );
};

export default ProjectDetail;
