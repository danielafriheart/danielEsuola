import React from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ title, description, children, className }) => {
    return (
        <section className={className} id="smooth-wrapper" data-scroll-container>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="http://esuoladaniel.com/" />
            </Helmet>

            {children}
        </section>
    )
}

export default Container
