import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover({ imageSrc, children, customHeight, className }) {
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
                    height: '45vh', // Use 50vh for small screens
                },
            }}
            className={className}
        >
            <Card component="li"
                sx={{
                    minWidth: 300,
                    maxWidth: '100%',
                    flexGrow: 1,
                    p: 3,
                }}>
                <CardCover>
                    <img
                        src={imageSrc}
                        srcSet={imageSrc}
                        loading="lazy"
                        alt="image"
                    />
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