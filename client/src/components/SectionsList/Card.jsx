import {
  Box,
  Stack,
  Divider,
  Card,
  CardBody,
  Heading,
  Button
} from '@chakra-ui/react'

import { GiNuclearWaste } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { MdBiotech } from 'react-icons/md'

const CustomListItem = ({ icon, name, bg, btn, handleClick }) => {
  return (
    <Box 
      w={'60%'} 
      h={'100%'}
      mx={2}
    >
      <Card>
        <CardBody>
          <Stack
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              position={'relative'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              height={'10rem'}
              width={'10rem'}
              borderRadius={'50%'}
              background={bg}
              borderWidth={'15px'}
              borderColor={'whiteAlpha.600'}
              boxShadow={'inset -10px 5px 10px gray , -10px 5px 10px #b8b8b8'}
            >
              {icon}
              
              <Box 
                position={'absolute'}
                top={'9.2rem'}
                zIndex={0}
                >
                <Divider
                  height={'5rem'}
                  orientation='vertical'
                  borderColor={'black'}
                  width={'1px'}
                  borderWidth={'1px'}
                  background={'black'}
                  />
              </Box>
              <Box
                position={'absolute'}
                top={'14.4rem'}
                borderRadius={'50%'}
                backgroundColor={bg}
                width={'1.5rem'}
                height={'1.5rem'}
              />
            </Box>
            <Box 
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              pt={'6.5rem'}
            >
              <Heading fontSize={'16px'} textAlign={'center'}>
                {name}
              </Heading>
              <Button colorScheme={btn} mt={2} onClick={handleClick}>
                Перейти
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default CustomListItem