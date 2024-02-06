import React from 'react'
import Container from '../layout/container/Container'
import Hero from '../components/Hero'
import CurrentlyWorkingOn from '../components/CurrentlyWorkingOn'
import Projects from '../components/Projects'
import DesignSuccess from '../components/DesignSuccess'
import Services from '../components/Services'
import MyStory from '../components/MyStory'


const Home = () => {
    return (
        <Container title={'Esuola Daniel'} description={"Esuola Daniel's Portfolio Website"}>
            <Hero />
            <CurrentlyWorkingOn />
            <Projects />
            <DesignSuccess />
            <Services />
            <MyStory />
        </Container>
    )
}

export default Home
