import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react'
import { FcFullTrash } from 'react-icons/fc'

import { EcoLifeCard } from '../components'

import { ecorecycleCards } from '../constants'

const Ecorecycle = () => {
  return (
    <Container maxW={'container.xl'} mt={'12%'} py={6}>
        <Box>
          <Heading as={'h1'}>
            Переработка отходов
          </Heading>
        </Box>
        <Box>
          {
            ecorecycleCards.map((card) => (
              <EcoLifeCard card={card} bg={card.bg} icon={<FcFullTrash size={'3rem'} />} />
            ))
          }
        </Box>
    </Container>
  )
}

export default Ecorecycle