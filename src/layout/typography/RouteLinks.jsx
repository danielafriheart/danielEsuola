import React from 'react'
import { NavLink } from 'react-router-dom'
import Paragraph from './Paragraph'

const RouteLinks = ({ routeLocation, linkTitle, className}) => {
    return (
        <div>
            <NavLink to={routeLocation} className={className}>
                <Paragraph text={linkTitle} variant={'base'}/>
            </NavLink>
        </div>
    )
}

export default RouteLinks
