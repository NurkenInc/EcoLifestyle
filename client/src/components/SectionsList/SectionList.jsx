import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { GiNuclearWaste } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { MdBiotech } from 'react-icons/md'
import { motion } from 'framer-motion'

import { staggerContainer, textVariant2 } from '../../utils/motion'

import Card from './Card'

export const sections = [
  {
    name: 'Экологический образ жизни',
    icon: <AiFillHeart size={'4rem'} color='white' />,
    bg: 'teal.200',
    btn: 'teal',
    link: '/ecolifestyle'
  },
  {
    name: 'Экологические технологии',
    icon: <MdBiotech size={'4rem'} color='white' />,
    bg: 'pink.200',
    btn: 'pink',
    link: '/ecotech'
  },
  {
    name: 'Переработка отходов',
    icon: <GiNuclearWaste size={'4rem'} color='white' />,
    bg: 'yellow.200',
    btn: 'yellow',
    link: '/ecorecycle'
  }
]

const SectionsList = () => {
  const navigate = useNavigate()
  
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'}>
        <motion.span variants={textVariant2}>
          <Heading py={'1rem'}>Разделы сайта</Heading>
        </motion.span>
        <Box
          display={'flex'}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {
            sections.map((item, index) => (
              <Card 
                key={index}
                icon={item.icon} 
                name={item.name} 
                bg={item.bg} 
                btn={item.btn}
                handleClick={
                  () => {
                    navigate(item.link)
                  }
                }
              />
            ))
          }
        </Box>
      </Container>
    </motion.div>
  )
}

export default SectionsList