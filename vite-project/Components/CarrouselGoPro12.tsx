import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

// Images
import GoPro1 from '../src/assets/gopro12-1.jpg';
import GoPro2 from '../src/assets/gopro12-2.jpeg';
import GoPro3 from '../src/assets/gopro12-3.jpeg';
import GoPro4 from '../src/assets/gopro12-4.jpeg';

const images = [GoPro1, GoPro2, GoPro3, GoPro4];

function ImageCarousel() {
    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto', mt: 5 }}>
            <Carousel>
                {images.map((image, i) => (
                    <Paper
                        key={i}
                        elevation={10}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '4px solid #000',
                            borderRadius: '8px',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '390px',
                                height: '390px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            }}
                            src={image}
                            alt={`Slide ${i}`}
                        />
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
}

export default ImageCarousel;
