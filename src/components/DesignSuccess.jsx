import React from 'react'
import Section from '../layout/container/Section'
import ThreeColumnGrid from '../layout/container/ThreeColumnGrid'

const DesignSuccess = () => {
    return (
        <Section>
            <ThreeColumnGrid
                caption={'Design Success'}
                paragrahText={"See how I've turned ideas into reality. Dive into the stories of successful product designs that make a difference."}
                btnText={'Select Projects'}
                href={'/work'}
            />
        </Section>
    )
}

export default DesignSuccess
