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
            <CurrentlyWorkingOn src={'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707164727/Daniel/IMG_4854_ednbr2.jpg'} />
            <MyStory />
            <Services />
            {/* <Projects /> */}
            <DesignSuccess />
        </Container>
    )
}

export default Home
