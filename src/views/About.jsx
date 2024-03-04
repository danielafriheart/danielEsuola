import React from 'react'
import DesignSuccess from '../components/DesignSuccess'
import Gallery from '../components/Gallery'
import TwoColumnGrid from '../layout/container/TwoColumnGrid'
import Interests from '../components/PersonalInterest'
import Container from '../layout/container/Container'
import Hero from '../components/Hero'
import Perspective from './pages/Perspective'
import Awards from './pages/Awards'
// import SkillTags from '../components/SkillTags'


const About = () => {

    return (
        <Container title={'Esuola ® - Esteemed Creative Developer'} description={"Esuola Daniel's Portfolio Website"} className={'space-y-24'}>
            <Hero />
            {/* <SkillTags/> */}
            <Gallery />
            <Perspective />
            <Interests />
            <TwoColumnGrid caption={''} variant={'paragraph'} paragrahText={"When I’m not on my computer, building or exploring new web experiences, I’m probably playing games or making videos for YouTube."} />
            {/* <Pictures /> */}
            <Awards />
            <DesignSuccess />
        </Container>
    )
}

export default About
