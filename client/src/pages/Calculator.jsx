import React, { useState } from 'react'
import {
  Box, 
  Container,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button
} from '@chakra-ui/react'

const initialState = { water: 0, electricity: 0, gas: 0 }

const Calculator = () => {
  const [form, setForm] = useState(initialState)
  const [consumtion, setConsumtion] = useState(0)
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((state) => ({ ...state, [name]: value }))
  }

  const calculateResult = () => {
    const consumtion = Object.values(form).reduce(
      (acc, cur) => acc + parseInt(cur),
      0
    )
    setConsumtion(consumtion)
  }

  return (
    <Container
      mx={'auto'}
      mt={'15%'}
    >
      <Card>
        <CardHeader>
          <Box>
            <Heading>
              Ваш помощник
            </Heading>
            <Text>Калькулятор потребления ресурсов</Text>
          </Box>
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormLabel>
              Введите ежемесячный расход на воду(тг):
            </FormLabel>
            <Input
              type='number'
              name='water'
              value={form.water}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Введите ежемесячный расход на электричество(тг):
            </FormLabel>
            <Input
              type='number'
              name='electricity'
              value={form.electricity}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Введите ежемесячный расход на газ(тг):
            </FormLabel>
            <Input
              type='number'
              name='gas'
              value={form.gas}
              onChange={handleChange}
            />
          </FormControl>
        </CardBody>
        <CardFooter>
          <Box w={'100%'}>
            <Box
              w={'100%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Button onClick={() => {calculateResult()}} colorScheme='yellow'>
                Высчитать
              </Button>
            </Box>
            {
              (
                consumtion !== 0
                ?
                <Box>
                  <Heading as='h3' fontSize={'20px'}>Итог: {consumtion}тг</Heading>
                </Box>
                : null
              )
            }
          </Box>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Calculator