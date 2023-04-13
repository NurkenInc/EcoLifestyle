import {
  Container,
  Box,
  Heading
} from '@chakra-ui/react'
import { FcSmartphoneTablet } from 'react-icons/fc'

import { EcoLifeCard } from '../components'

import { ecotechCards } from '../constants'

const Ecotech = () => {
  return (
    <Container maxW={'container.xl'} mt={'12%'} py={6}>
        <Box>
          <Heading as={'h1'}>
            Экологические технологии
          </Heading>
        </Box>
        <Box>
          {
            ecotechCards.map((card) => (
              <EcoLifeCard card={card} bg={card.bg} icon={<FcSmartphoneTablet size={'3rem'} />} />
            ))
          }
        </Box>
    </Container>
  )
}

export default Ecotech