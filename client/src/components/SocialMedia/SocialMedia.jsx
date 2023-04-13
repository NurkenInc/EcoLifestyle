import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Button
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io'
import { motion } from 'framer-motion'

import { staggerContainer, textVariant2 } from '../../utils/motion'

const SocialMedia = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
    >
      <Container maxW={'container.xl'}>
        <motion.span variants={textVariant2}>
          <Heading py={'1rem'}>Мы в соц. сетях</Heading>
        </motion.span>
        <List>
              <ListItem>
                <Link href='https://twitter.com/?lang=en' target={'_blank'}>
                  <Button
                    variant={'ghost'}
                    leftIcon={<IoLogoTwitter />}
                    colorScheme={'cyan'}
                  >
                    @EcoLifestyle
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://www.facebook.com/' target={'_blank'}>
                  <Button
                    variant={'ghost'}
                    leftIcon={<IoLogoFacebook />}
                    colorScheme={'blue'}
                  >
                    @EcoLifestyle
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://www.instagram.com/' target={'_blank'}>
                  <Button
                    variant={'ghost'}
                    leftIcon={<IoLogoInstagram />}
                    colorScheme={'pink'}
                  >
                    @EcoLifestyle
                  </Button>
                </Link>
              </ListItem>
            </List>
      </Container>
    </motion.div>
  )
}

export default SocialMedia