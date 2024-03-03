import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import RouteLinks from '../layout/typography/RouteLinks'
import { NavLink, useLocation } from 'react-router-dom'
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Paragraph from '../layout/typography/Paragraph'
import Section from '../layout/container/Section'


const Example = () => {

    const pageroute = [
        {
            name: 'Projects ,',
            description: 'Get a better understanding of your traffic',
            href: '/projects',
            icon: ChartPieIcon,
            data_aos: 'fade-in',
            data_aos_delay: '0'
        },
        {
            name: 'Contact',
            description: 'Your customers’ data will be safe and secure',
            href: '/contact',
            icon: FingerPrintIcon,
            data_aos: 'fade-in',
            data_aos_delay: '150'
        },
    ]



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const location = useLocation();

    return (
        <nav className=" ">
            <header className={'lg:px-20 md:p-10 p-5 md:pt-10 flex items-center justify-between'}  aria-label="Global">

                <NavLink to={"/"} className="flex items-center gap-3 text-background ">
                    <Paragraph text={'Esuola Daniel'} variant={'label'} />
                </NavLink>


                <div className="hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

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