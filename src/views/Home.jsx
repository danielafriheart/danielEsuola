import React from 'react'
import Container from '../layout/container/Container'
import Hero from '../reusableComponents/Hero'
import CurrentlyWorkingOn from './CurrentlyWorkingOn'
import Projects from './Projects'
import DesignSuccess from './DesignSuccess'
import Services from './Services'
import MyStory from './MyStory'


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
