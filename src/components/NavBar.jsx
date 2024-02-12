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
        <header className=" fixed top-0 w-screen z-50">
            <nav className="mx-auto flex max-w-[93vw] items-center justify-between py-10 lg:px-8" aria-label="Global">

                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5">
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {logo}
                        </Box>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-3">
                    {pageroute.map((page, id) => (
                        <RouteLinks
                            data_aos={page.data_aos}
                            data_aos_delay={page.data_aos_delay}
                            key={id}
                            linkTitle={page.name}
                            routeLocation={page.href}
                            routeStyleType={'noIcon'}
                            hoverState={`${location.pathname === page.href ? 'always' : 'hover'}`}
                            variant={'base'}
                            className={'font-thin'}
                        />
                    ))}
                </Popover.Group>
            </nav>


            {/* <<<<<<<<<<========== Mobile Menu Section ==========>>>>>>>>>> */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#992333] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            {logo}
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <RouteLinks
                                    linkTitle={'Home'}
                                    routeLocation={'/'}
                                    className={'font-thin text-white'}
                                    hoverState={'hover'}
                                // className={'-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'}
                                />
                                {pageroute.map((page, id) => (
                                    <RouteLinks
                                        key={id}
                                        linkTitle={page.name}
                                        routeLocation={page.href}
                                        // routeStyleType={'noIcon'}
                                        hoverState={`${location.pathname === page.href ? 'always' : 'hover'}`}
                                        variant={'base'}
                                        className={'font-thin text-white navLink'}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
export default Example