import React from 'react'
import {
  Container,
  Box,
  Image
} from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { slides }from '../../constants/index'

const handleDragStart = (e) => e.preventDefault();

const items = slides.map((item) => (
  <Box 
    height={'300px'}
    width={'90vw'}
    overflow={'hidden'}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
  >
    <Image
      src={item.url}
      onDragStart={handleDragStart}
      role="presentation"
      align={'center'}
      fit={'cover'}
    />
  </Box>
))
  
  const CustomSlider = () => {
  return (
      <Container
        display={'flex'} 
        alignContent={'center'}
        justifyContent={'center'} 
        maxW={'container.xl'}
        pt={'100px'}
      >
        <AliceCarousel 
          mouseTracking 
          items={items} 
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
        />
      </Container>
  )
}

export default CustomSlider