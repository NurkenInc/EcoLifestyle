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
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const GoodsModal = ({ isOpen, onOpen, onClose, product }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Heading fontSize={'24px'} textAlign={'center'}>Экологическое мероприятие!</Heading>
            <Box display={'flex'} alignItems={'center'} py={4}>
              <MdDateRange />
              <Heading fontSize='16px'>Дата: {product.date ? product.date.toString().slice(0, 11) + ', 2023' : null}</Heading>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <AiOutlineQuestionCircle size={'1rem'} />
              <Heading fontSize='16px'>Описание:</Heading>
            </Box>
              <Text fontSize='16px'>{product.why}</Text>
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

export default GoodsModal