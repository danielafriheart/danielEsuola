import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

export default function MediaCover({ imageSrc, children, customHeight, delay }) {


    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                p: 0, m: 0,
                height: ['50vh', null, '60vh', customHeight || '50vh'], // Use customHeight for large screens
                '@media screen and (max-width: 992px)': {
                    height: '60vh', // Use 80vh for medium screens
                },
                '@media screen and (max-width: 576px)': {
                    height: '50vh', // Use 100vh for small screens
                },
            }}
            
            data-aos="fade-in"
            data-aos-delay={delay}
            data-aos-easing="ease-in-sine"
        >
            <Card component="li"
                sx={{
                    minWidth: 300,
                    maxWidth: '100%',
                    flexGrow: 1,
                    p: 5,
                    backgroundColor: 'black',
                    borderRadius: 10
                }}>
                <CardCover>
                    <img
                        src={imageSrc}
                        srcSet={imageSrc}
                        loading="lazy"
                        alt="Image"
                        style={{ maxWidth: '100%', maxHeight: '100%' }} // Added style to remove default zoom
                    />
                </CardCover>
                <CardContent
                    sx={{
                        display: 'grid',
                        placeContent: 'center'
                    }}
                >
                    {children}
                </CardContent>
            </Card>
        </Box>
    );
}