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
                height: [customHeight || '50vh'],
            }}
            className={className}
            data-aos="fade-in"
            data-aos-delay="30"
        >
            <Card component="li"
                sx={{
                    minWidth: 300,
                    maxWidth: '100%',
                    flexGrow: 1,
                    borderRadius: '12px',
                    p: 3,
                }}>
                <CardCover
                    // sx={{
                    //     backgroundImage: `url(${imageSrc})`,
                    //     backgroundSize: 'cover',
                    //     backgroundAttachment: 'fixed',
                    //     backgroundPosition: 'center',
                    //     backgroundRepeat: 'no-repeat'
                    // }}
                    className={className}

                >
                    <img
                        src={imageSrc}
                        srcSet={imageSrc}
                        loading="lazy"
                        alt="image"
                    />
                </CardCover>
                <CardCover
                    // sx={{
                    //     background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    // }}
                    className={className}

                />
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