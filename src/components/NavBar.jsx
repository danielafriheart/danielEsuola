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
import { useLocation } from 'react-router-dom'
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';


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
        // {
        //     name: 'About,',
        //     description: 'Speak directly to your customers',
        //     href: '/about',
        //     icon: CursorArrowRaysIcon,
        //     data_aos: 'fade-in',
        //     data_aos_delay: '100'
        // },
        {
            name: 'Contact',
            description: 'Your customers’ data will be safe and secure',
            href: '/contact',
            icon: FingerPrintIcon,
            data_aos: 'fade-in',
            data_aos_delay: '150'
        },
    ]

    const logo = <Avatar alt="Esuola Daniel Okikiola" src="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707069784/Daniel/Avatar_te2xb4.jpg" s />


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const location = useLocation();

    return (
        <header className=" ">
            <nav className="mx-auto flex lg:w-[93vw] w-[90vw] items-center justify-between py-10 lg:px-8" aria-label="Global">

                <div className="flex">
                    <a href="/" className="-m-1.5">
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {logo}
                        </Box>
                    </a>
                </div>


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
                    linkTitle={"esuoladaniel002@gmail.com"}
                    routeLocation={'mailto:esuoladaniel002@gmail.com'}
                    routeStyleType={'noIcon'}
                    hoverState={`always`}
                    variant={'base'}
                    className={'lg:flex md:flex hidden'}
                />
            </nav>
        </header>
    )
}
export default Example