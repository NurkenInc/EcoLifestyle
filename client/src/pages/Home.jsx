import { Box } from '@chakra-ui/react'

import {
  Navbar,
  Slider,
  About,
  Articles,
  SectionsList,
  EventSection,
  SocialMedia,
  Contacts
} from '../components'

const Home = () => {

  return (
    <Box>
      <Navbar />
      <Slider />
      <About />
      <Articles />
      <SectionsList />
      <EventSection />
      <SocialMedia />
      <Contacts />
    </Box>
  )
}

export default Home