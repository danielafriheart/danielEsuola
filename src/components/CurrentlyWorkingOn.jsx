import React from 'react'
import Section from '../layout/container/Section'
import ActionAreaCard from './ActionAreaCard'

const CurrentlyWorkingOn = ({ src }) => {
    return (
        <Section>
            <ActionAreaCard
                customHeight={'70vh'}
                src={src}
            />
        </Section>
    )
}

export default CurrentlyWorkingOn
