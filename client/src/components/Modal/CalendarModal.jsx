import {
  Container,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Heading
} from '@chakra-ui/react'
import { MdDateRange } from 'react-icons/md'

const CalendarModal = ({ isOpen, onOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{event.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Heading fontSize={'24px'} textAlign={'center'}>Экологическое мероприятие!</Heading>
            <Box display={'flex'} alignItems={'center'} py={4}>
              <MdDateRange />
              <Heading fontSize='16px'>Дата: {event.day + ' ' + event.month}, 2023</Heading>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='teal' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CalendarModal