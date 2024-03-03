import React from 'react'
import Section from '../layout/container/Section'
import ThreeColumnGrid from '../layout/container/ThreeColumnGrid'

const DesignSuccess = () => {
    return (
        <Section>
            <ThreeColumnGrid
                caption={'My Story'}
                paragrahText={"For me, this is a journey of creativity and exploration... I really just want to create."}
                btnText={'About Me'}
                href={'/about'}
            />
        </Section>
    )
}

export default DesignSuccess
