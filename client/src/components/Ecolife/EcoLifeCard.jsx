import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Collapse,
  useDisclosure,
  Box,
} from '@chakra-ui/react'

const EcoLifeCard = ({ card, bg, icon }) => {
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Card cursor={'pointer'} backgroundColor={bg} onClick={onToggle} my={6}>
      <CardHeader>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Heading fontSize={'24px'}>{card.title}</Heading>
          <Box px={6}>
            {icon}
          </Box>
        </Box>
      </CardHeader>
      <Collapse in={isOpen} animateOpacity>
        <CardBody>
          <Heading fontSize={'16px'}>{card.text}</Heading>
        </CardBody>
      </Collapse>
    </Card>
  )
}

export default EcoLifeCard