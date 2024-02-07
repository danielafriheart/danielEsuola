import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Paragraph from "../layout/typography/Paragraph";
import Qr from "../Img/danielafriheart.svg";
import Avatar from '@mui/joy/Avatar';
import MediaCover from './MediaCard';


export default function Example({ open, setOpen, dialogTitle, dialogMessage }) {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg lg:w-1/4">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="text-center space-y-5">
                                        <Dialog.Title>
                                            <Paragraph text={'Ókíkìọlá'} variant={'paragraph_md'} />
                                        </Dialog.Title>
                                        <div className="mt-2 p-10 space-y-3">
                                            <Paragraph text={'Scan Code To View My Website'} />
                                            <img src={Qr} alt="Qr Code to my socials" />
                                            <Paragraph text={'Okikiola.com'} />
                                        </div>

                                        <div className={'grid place-content-center'}>
                                            {/* <Paragraph text={dialogTitle} variant={'paragraph_md'} /> */}
                                            <Avatar alt="Esuola Daniel Okikiola" src="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707069784/Daniel/Avatar_te2xb4.jpg" className='mx-auto mb-5' />
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Seen
                                    </button>
                                </div> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
