import React, { useState } from 'react'
import { IoShareOutline } from "react-icons/io5";
import Dialog from "./Dialog";
import { Avatar, Box } from '@mui/joy';

const ShareWebsite = () => {
    const [open, setOpen] = useState(false)

    const handleShare = () => {
        setOpen(true)
    }

    const Avi = <Avatar alt="Esuola Daniel Okikiola" src="https://res.cloudinary.com/dnzi0xxtx/image/upload/v1707069784/Daniel/Avatar_te2xb4.jpg" s />

    return (
        <>
            <Dialog open={open} setOpen={setOpen} dialogTitle={'Connect'} dialogMessage={"Thank you for subscribing to our waitlist! We've just sent you a special gift via email. Stay tuned; we'll be in touch soon! 😉"} />

            <button onClick={handleShare} className='p-3 rounded-full fixed bottom-10 lg:right-16 right-5 z-50 bg-white'>
                <div className="flex">
                    <span className="-m-1.5">
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {Avi}
                        </Box>
                    </span>
                </div>
            </button>
        </>
    )
}

export default ShareWebsite
