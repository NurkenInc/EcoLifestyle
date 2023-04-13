import {
  Text,
  Container,
  Image
} from '@chakra-ui/react'
import { GiEcology } from 'react-icons/gi'

const Logotype = () => {

  return (
    <Container 
      as={'span'}
      alignItems={'center'}
      fontSize={'18px'}
      lineHeight={'20px'}
      padding={'10px'}
      display={'inline-flex'}
      fontWeight={'bold'}
    >
      <GiEcology />
      <Text
        color={'gray.700'}
        fontFamily={'M PLUS Rounded 1c'}
        fontWeight={'bold'}
        ml={'3'}
      >
        EcoLyfeStyle
      </Text>
    </Container>
  )
}

export default Logotype