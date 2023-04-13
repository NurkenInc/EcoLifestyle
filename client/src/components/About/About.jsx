import {
  Box,
  Container,
  Heading,
  Card,
  CardBody,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { textVariant2, staggerContainer } from '../../utils/motion'

import { description, targets } from '../../constants'

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'} id='about'>
        <Box py={4}>
        <motion.span
            variants={textVariant2}
        >
          <Heading>Кто мы?</Heading>
        </motion.span>
        </Box>
        
        <Box>
          <Text>
            {description}
          </Text>
        </Box>
        <motion.span
          variants={textVariant2}
        >
          <Heading py={'1rem'}>Наши цели</Heading>
        </motion.span>
        <List>
          {
            targets.map((item, index) => (
              <ListItem key={index} py={2}>
                <Card>
                  <CardBody>
                    <Text>
                      {index + 1}. {item}
                  </Text>
                  </CardBody>
                </Card>
              </ListItem>
            ))
          }
        </List>
      </Container>
    </motion.div>
  )
}

export default About