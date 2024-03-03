import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { motion } from "framer-motion";
import { useState } from 'react';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function MediaCover({ imageSrc, children, customHeight, className }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                p: 0, m: 0,
                height: ['50vh', null, null, customHeight || '50vh'], // Use customHeight for large screens
                '@media screen and (max-width: 992px)': {
                    height: '50vh', // Use 50vh for medium screens
                },
                '@media screen and (max-width: 576px)': {
                    height: '50vh', // Use 50vh for small screens
                },
            }}
        >
            <Card component="li"
                sx={{
                    minWidth: 300,
                    maxWidth: '100%',
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: 'transparent'
                }}>
                <CardCover>
                    <motion.div
                        initial={false}
                        animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsInView(true)}
                    >
                        <img src={imageSrc} alt="Images" onLoad={() => setIsLoaded(true)} />
                    </motion.div>
                </CardCover>

                <CardCover />

                <CardCover />
                <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                        mb='auto'
                    >
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}