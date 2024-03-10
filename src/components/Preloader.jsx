import React, { useEffect } from 'react';
import Container from '../layout/container/Container';
import Paragraph from '../layout/typography/Paragraph';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Preloader() {
    const date = new Date();
    const year = date.getFullYear();

    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const controls = animate(count, 100);

        // Stop animation when component unmounts
        return () => controls.stop();
    }, []);

    useEffect(() => {
        const unsubscribe = count.onChange(value => {
            if (value >= 100) {
                setLoading(false); // Once the counter animation reaches 100, set loading to false
            }
        });

        // Unsubscribe from motion value changes when component unmounts
        return () => unsubscribe();
    }, [count]);

    return (
        <Container title={'Loading'} description={"Esuola Daniel's Portfolio Website"} className={'cursor-wait bg-black'} >
            <section className='w-full h-screen top-0'>
                <div className="w-[85vw] sm:w-[95vw] lg:w-[90vw] mx-auto flex flex-col justify-between py-20 h-full">
                    <div className='text-right'>
                        <Paragraph text={'Daniel Esuola'} className={'text-White header'} variant={'paragraph'} />
                        <Paragraph text={`Portfolio  © ${year}`} className={'text-White header'} variant={'paragraph'} />
                    </div>
                    <div>
                    </div>
                    <div>
                        <span className='flex items-center'>
                            <motion.div className='header text-Header text-White'>
                                {rounded}
                            </motion.div>
                            <Paragraph text={"%"} className='header text-Header text-White' />
                        </span>
                    </div>
                </div>
            </section>
        </Container>
    );
}
