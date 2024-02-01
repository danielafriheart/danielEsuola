import React from 'react'
import Section from '../layout/container/Section'
import ThreeColumnGrid from '../layout/container/ThreeColumnGrid'

const DesignSuccess = () => {
    return (
        <Section>
            <ThreeColumnGrid
                caption={'Designing Success'}
                paragrahText={"See how we've turned ideas into reality. Dive into the stories of"}
                greyText={'successful product designs that make a difference.'}
                btnText={'Our Work'}
            />
        </Section>
    )
}

export default DesignSuccess
