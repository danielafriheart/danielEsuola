import React from 'react'
import Section from '../layout/container/Section'
import ThreeColumnGrid from '../layout/container/ThreeColumnGrid'

const DesignSuccess = () => {
    return (
        <Section className={'my-24'}>
            <ThreeColumnGrid
                caption={'My Story'}
                paragrahText={"For me, this is a journey of "}
                greyText={'creativity and exploration... '}
                trailingText={'I really just want to create.'}
                btnText={'About Me'}
                href={'/about'}
            />
        </Section>
    )
}

export default DesignSuccess
