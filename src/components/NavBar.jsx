import { Popover } from '@headlessui/react'
import RouteLinks from '../layout/typography/RouteLinks'
import { NavLink, useLocation } from 'react-router-dom'
import Paragraph from '../layout/typography/Paragraph'


const Example = () => {

    const pageroute = [
        {
            name: 'Projects ,',
            description: 'Get a better understanding of your traffic',
            href: '/projects',
        },
        {
            name: 'Contact',
            description: 'Your customers’ data will be safe and secure',
            href: '/contact',
        },
    ]

    const location = useLocation();

    return (
        <nav>
            <header className={'lg:px-20 md:p-10 p-5 md:pt-10 flex items-center justify-between'}  aria-label="Global">

                <NavLink to={"/"} className="flex items-center gap-3 text-background ">
                    <Paragraph text={'Esuola Daniel'} variant={'base'} />
                </NavLink>

                <Popover.Group className="flex gap-x-3">
                    {pageroute.map((page, id) => (
                        <RouteLinks
                            key={id}
                            linkTitle={page.name}
                            routeLocation={page.href}
                            routeStyleType={'noIcon'}
                            hoverState={`${location.pathname === page.href ? 'always' : 'hover'}`}
                            variant={'base'}
                        />
                    ))}
                </Popover.Group>

                <RouteLinks
                    linkTitle={"Esuoladaniel002@gmail.com"}
                    routeLocation={'mailto:esuoladaniel002@gmail.com'}
                    routeStyleType={'noIcon'}
                    hoverState={`always`}
                    variant={'base'}
                    className={'lg:flex md:flex hidden'}
                />
            </header>
        </nav>
    )
}
export default Example