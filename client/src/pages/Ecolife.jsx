import {
  Container,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc'

import { EcoLifeCard } from '../components'

import { ecolifestyleCards } from '../constants'

const Ecolife = () => {
  
  return (
    <Container maxW={'container.xl'} mt={'12%'} py={6}>
        <Box>
          <Heading as={'h1'}>
            Экологический образ жизни
          </Heading>
        </Box>
        <Box>
          {
            ecolifestyleCards.map((card) => (
              <EcoLifeCard card={card} bg={card.bg} icon={<FcLike size={'3rem'} />} />
            ))
          }
        </Box>
    </Container>
  )
}

export default Ecolife