import React, { useState } from 'react'
import { IoShareOutline } from "react-icons/io5";
import Dialog from "./Dialog";

const ShareWebsite = () => {
    const [open, setOpen] = useState(false)

    const handleShare = () => {
        setOpen(true)
    }

    return (
        <>
            <Dialog open={open} setOpen={setOpen} dialogTitle={'Connect'} dialogMessage={"Thank you for subscribing to our waitlist! We've just sent you a special gift via email. Stay tuned; we'll be in touch soon! 😉"} />

            <button onClick={handleShare} className='p-3 bg-white rounded-xl fixed bottom-10 right-10 z-50 shadow'>
                <IoShareOutline size={'2em'} />
            </button>
        </>
    )
}

export default ShareWebsite
