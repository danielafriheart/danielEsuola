import React from 'react'
import TwoColumnGrid from '../../layout/container/TwoColumnGrid'
import Paragraph from '../../layout/typography/Paragraph'
import Button from '../../layout/container/Button'

const ReachOut = () => {
    return (
        <TwoColumnGrid caption={'React Out :)'}>
            <Paragraph text={"Looking to grow your business through the power of great digital design? "} variant={'label'} className={'lg:w-[50%]'} />
            <Paragraph text={"Reach out to get the conversation started about your digital design needs. "} variant={'label'} className={'lg:w-[50%]'} />
            <div>
                <Button btnText={'Esuoladaniel002@gmail.com'} variant={'grey'} href={'mailto:esuoladaniel002@gmail.com'} />
            </div>
        </TwoColumnGrid>
    )
}

export default ReachOut
