import {
  Container,
  Box,
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  CardFooter
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { HiMail } from 'react-icons/hi'
import { PhoneIcon } from '@chakra-ui/icons'
import { GoLocation } from 'react-icons/go'

import { staggerContainer, textVariant2 } from '../../utils/motion'

const Contacts = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'} id='contacts'>
        <motion.span variants={textVariant2}>
          <Heading py={'1rem'}>Наши контакты</Heading>
        </motion.span>
        <Box>
          <Card>
            <CardHeader>
              <Heading fontSize={'22px'} as={'h3'}>
                Контакты
              </Heading>
              <Text>Заполните форму ниже для того чтобы связаться с нами</Text>
              <List px={8} py={4}>
                <ListItem display={'flex'} alignItems={'center'} my={4}>
                  <ListIcon as={PhoneIcon}></ListIcon>
                  <Text>+7 701 863 0109</Text>
                </ListItem>
                <ListItem display={'flex'} alignItems={'center'} my={4}>
                  <ListIcon as={HiMail}></ListIcon>
                  <Text>nurkenkenes7@gmail.com</Text>
                </ListItem>
                <ListItem display={'flex'} alignItems={'center'} mt={4}>
                  <ListIcon as={GoLocation}></ListIcon>
                  <Text>Kazakhstan, Astana</Text>
                </ListItem>
              </List>
            </CardHeader>
            <CardBody>
              <Box>
                <FormControl mb={4}>
                  <FormLabel>Имя</FormLabel>
                  <Input type='text' placeholder='Ваше имя' />
                </FormControl>
                <FormControl my={4}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' placeholder='Ваш email' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Сообщение</FormLabel>
                  <Textarea size='md' placeholder='Ваше сообщение' />
                </FormControl>
              </Box>
            </CardBody>
            <CardFooter>
              <Button px={12} colorScheme='teal'>Отправить</Button>
            </CardFooter>
          </Card>
        </Box>
      </Container>
    </motion.div>
  )
}

export default Contacts