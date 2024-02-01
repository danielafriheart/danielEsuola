import React from 'react'
import Header from '../layout/typography/Header'
import Container from '../layout/container/Container'
import Paragraph from '../layout/typography/Paragraph'
import Hero from '../reusableComponents/Hero'
import ActionAreaCard from '../components/ActionAreaCard'
import Projects from '../components/Projects'
import Section from '../layout/container/Section'
import DesignSuccess from '../components/DesignSuccess'
import Services from '../components/Services'

const Home = () => {
    return (
        <Container title={'Okikiola.'} description={"Esuola Daniel's Portfolio Website"}>
            <Hero />

            <Section>
                <ActionAreaCard
                    caption={'StoqHive'}
                    label={'Business Management System'}
                />
            </Section>
            
            <Projects />
            <DesignSuccess/>
            <Services/>
        </Container>
    )
}

export default Home
