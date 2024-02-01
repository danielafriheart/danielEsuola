import React from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ title, description, children }) => {
    return (
        <section>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            {children}
        </section>
    )
}

export default Container
