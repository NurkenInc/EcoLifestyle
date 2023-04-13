import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { staggerContainer, textVariant2 } from '../../utils/motion'

import Card from './Card'

import { events } from '../../constants'

const EventSection = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'}>
        <Box>
          <motion.span variants={textVariant2}>
            <Heading py={'1rem'}>Мероприятия</Heading>
          </motion.span>
        </Box>
        <Box
          display={'flex'}
          alignItems={'stretch'}
          overflowX={'scroll'}
          width={'100%'}
        >
          {
            events.map((item, index) => (
              <Card
                key={index} 
                title={item.title} 
                image={item.image} 
                address={item.address} 
                date={item.date}
                link={item.link}
              />
            ))
          }
        </Box>
      </Container>
    </motion.div>
  )
}

export default EventSection