import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Box, Button, Container } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HomeSectionCarousel = () => {
   const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 4 },
   };

   const items = [1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

   return (
      <Container className='relative px-4 lg:px-8'>
         <Box className='relative p-5'>
            <AliceCarousel disableButtonsControls items={items} responsive={responsive} infinite />
         </Box>
         <Button
            className='z-50'
            variant='contained'
            sx={{
               position: 'absolute',
               top: '8rem',
               right: '0',
               transform: 'translateX(50%) rotate(90deg)',
            }}
            aria-label='next'
         >
            <ChevronLeftIcon sx={{ transform: 'rotate(90deg)' }} />
         </Button>
      </Container>
   );
};

export default HomeSectionCarousel;
