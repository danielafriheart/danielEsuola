import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import projectsData from './ProjectData'; // Import projectsData
import Section from '../../layout/container/Section';
import Header from '../../layout/typography/Header';
import Paragraph from '../../layout/typography/Paragraph';
import Error from '../../views/Error';
import MediaCover from '../../components/MediaCard';
import Container from '../../layout/container/Container';
import TwoColumnGrid from '../../layout/container/TwoColumnGrid';
import RouteLinks from '../../layout/typography/RouteLinks';
import ReachOut from '../../components/email/ReachOut';
// import Button from '';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <Error />;
  }

  const location = useLocation();

  return (
    <Container title={'Esuola ®'} description={"Esuola Daniel's Portfolio Website"}>
      <Section className={'lg:space-y-10 space-y-10'}>

        {/* <a href="" rel='noreferrer noopener' className='border border-black transition-all duration-300 flex items-center space-x-10  px-5 rounded-full w-fit'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </a> */}

        <div className='flex flex-col justify-center lg:space-y-10 space-y-10 '>
          <header className='flex gap-10'>
            <div>
              <Paragraph variant={'base'} greyText={'Industry'} delay={300} />
              <Paragraph variant={'base'} text={project.industry || "Project Industry here"} delay={400} />
            </div>
            {/* <div>
              <Paragraph variant={'base'} greyText={'Client'} delay={500}/>
              <Paragraph variant={'base'} text={project.client || "Project Client here"} delay={600}/>
            </div> */}
          </header>
        </div>

        <div>
          <Header leadingText={project.name} className={'uppercase'} delay={500} />
        </div>

        <MediaCover imageSrc={project.projectCover} customHeight={'85vh'} delay={700} />

      </Section>

      <TwoColumnGrid
        caption={`(00${project.id})`}
        variant={'paragraph'}
      >
        <Paragraph text={project.writeUp} variant={'label'} className={'lg:w-[75%]'} />

        <RouteLinks
          linkTitle={`${project.projectLink ? " Visit the website's live version" : "20% Complete"}`}
          routeLocation={project.projectLink || null}
          routeStyleType={'noIcon'}
          variant={'caption'}
          className={'my-10'}
          targetState={'_blank'}
        />

        <div className='lg:w-[70%]'>
          <ul>
            <li className='flex items-center py-8 justify-between border-black/30 border-t'>
              <Paragraph text={'Client'} variant={'caption'} />
              <Paragraph text={project.client} variant={'caption'} />
            </li>
            <li className='flex items-center py-8 justify-between border-black/30 border-y'>
              <Paragraph text={'Year'} variant={'caption'} />
              <Paragraph text={project.year} variant={'caption'} />
            </li>
            <li className='flex items-center py-8 justify-between border-black/30 border-b'>
              <Paragraph text={'Services'} variant={'caption'} />
              <Paragraph text={project.services} variant={'caption'} className={'w-1/2 lg:w-full md:w-full text-right'} />
            </li>
          </ul>
        </div>
      </TwoColumnGrid>

      {/* Gallery Area ===>>>>>>>>>> */}
      <Section className={'space-y-10'}>
        {project.gallery.map((image, id) => (
          <MediaCover key={id} imageSrc={image} customHeight={'85vh'} />
        ))}
      </Section>
      <ReachOut />
    </Container>
  );
};

export default ProjectDetail;
