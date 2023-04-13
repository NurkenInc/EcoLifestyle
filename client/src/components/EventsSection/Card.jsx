import {
  Box,
  Image,
  Text,
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Stack,
  Button,
  Link
} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'
import { MdDateRange } from 'react-icons/md'

const CustomCard = ({ title, image, address, date, link }) => {
  return (
    <Box height={'100%'} width={'100%'} mx={2}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow={'hidden'}
        variant={'outline'}
      >
        <Image
          objectFit={'cover'}
          maxW={{ base: '100%', sm: '200px' }}
          src={image}
          alt={title}
        />
        <Stack>
          <CardBody>
            <Box height={'50px'} width={'30rem'}>
              <Heading lineHeight={'20px'} size={'md'}>
                {title}
              </Heading>
            </Box>

            <Box display={'flex'}>
              <MdDateRange />
              <Heading size={'sm'}>Date</Heading>
            </Box>
            <Text>{date}</Text>
            <Box display={'flex'} mt={'0.7rem'} >
              <GoLocation />
              <Heading size={'sm'}>Address</Heading>
            </Box>
            <Text>{address}</Text>
          </CardBody>
          <CardFooter>
            <Box display={'flex'} justifyContent={'flex-start'} gap={5}>
              <Link href={link} target={'_blank'}>
                <Button colorScheme='yellow'>More Info</Button>
              </Link>
              <Link href={link} target={'_blank'}>
                <Button colorScheme='blue'>Register</Button>
              </Link>
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}

export default CustomCard