import {
  Container,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Heading,
  Stack,
  Link
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { staggerContainer, textVariant2 } from '../../utils/motion'

import { articles } from '../../constants'

const Articles = () => {

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'} id='articles'>
        <motion.span variants={textVariant2}>
          <Heading py={'1rem'}>Новости</Heading>
        </motion.span>
        {
          articles.map((item, index) => (
            <Card
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              my={4}
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={item.image}
                alt={`aricle ${index}`}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{item.title}</Heading>
                </CardBody>

                <CardFooter>
                  <Link href={item.link} target={'_blank'}>
                    <Button variant='solid' colorScheme='yellow'>
                      Читать
                    </Button>
                  </Link>
                </CardFooter>
              </Stack>
            </Card>
          ))
        }
      </Container>
    </motion.div>
  )
}

export default Articles