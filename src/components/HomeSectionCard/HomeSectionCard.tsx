import { Box, Container, Typography } from '@mui/material';
import React from 'react';

interface Props {}

const HomeSectionCard: React.FC<Props> = () => {
   return (
      <Container className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
         <Box className='h-[13rem] w-[10rem]'>
            <img
               className='object-cover object-top w-full h-full'
               src='src/assets/Image/banner2.png'
               alt='banner2'
            />
         </Box>
         <Box className='p-4'>
            <Typography variant='h6' className='text-lg font-medium text-gray-900'>
               Abc zozo
            </Typography>
            <Typography variant='body2' className='mt-2 text-sm text-gray-500'>
               Topic talk
            </Typography>
         </Box>
      </Container>
   );
};

export default HomeSectionCard;
