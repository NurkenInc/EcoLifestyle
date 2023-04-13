import React, { useState } from 'react'
import {
  Container,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast
} from '@chakra-ui/react'
import { Link as PageLink, useNavigate } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { signin, signup } from '../actions/auth'
import { AUTH } from '../constants/actionTypes'
import { regGmail, regPassword } from '../../../server/src/constants/regex'

import { Navbar } from '../components'

const initialState = { password: '', confirmPassword: '', firstName: '', lastName: '', email: '' }

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState(null)
  const toast = useToast()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleFormType = () => {
    setForm(initialState)
    setIsLogin(() => !isLogin)
  }

  const toggleShowPassword = () => {
    setShowPassword(() => !showPassword)
  }

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(() => !showConfirmPassword)
  }

  const validatePassword = (password) => {
    return regPassword.test(password)
  }

  const validateEmail = (email) => {
    return regGmail.test(email)
  }

  const submit = () => {
    if(isLogin) {
      dispatch(signin(form))
        .then((res) => {
          navigate('/')
        })
        .catch((err) => {
          setError(err)
        })
    } else {
      dispatch(signup(form))
        .then((res) => {
          navigate('/')
        })
        .catch((err) => {
          setError(err)
        })
    }
  }

  const handleSubmit = () => {
    if(!validateEmail(form.email)) {
      setError('Email введен неверно')
    } else if(!validatePassword(form.password)) {
      setError('Пароль введен неверно(должен содержать минимум 8 символов, минимум одну цифру, минимум букву большого регистра, минимум букву маленького регистра, минимум один спец символ)')
    } else if(form.confirmPassword !== form.password && !isLogin) {
      setError('Пароли должны совпадать')
    } else {
      submit()
    }
  }

  const handleChange = (e) => {
    setError(null)
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const getInputType = (show) => {
    return show ? 'text' : 'password'
  }

  return (
      <Container
        mx={'auto'}
        mt={'10%'}
        >
        <Box>
          <Card>
            <CardHeader>
              <Box display={'flex'} justifyContent={'center'}>
                {
                  isLogin ?
                  <Heading>Вход</Heading>
                  :
                  <Heading>Регистрация</Heading>
                }
              </Box>
            </CardHeader>
            <CardBody>
              {
                !isLogin && (
                  <Box>  
                  <FormControl>
                    <FormLabel>Имя</FormLabel>
                    <Input name='firstName' value={form.firstName} onChange={handleChange} autoFocus type='text' placeholder='Ваше имя' />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Фамилия</FormLabel>
                    <Input name='lastName' value={form.lastName} onChange={handleChange} type='text' placeholder='Ваша фамилия' />
                  </FormControl>
                </Box>
                )
              }
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input name='email' value={form.email} onChange={handleChange} type='email' placeholder='Ваш email' />
              </FormControl>
              <FormControl>
                <FormLabel>Пароль</FormLabel>
                <Box display={'flex'} alignItems={'center'}>
                  <Input name='password' value={form.password} onChange={handleChange} type={getInputType(showPassword)} placeholder='Ваш пароль' />
                  <Button 
                    variant={'ghost'}
                    px={0} 
                    onClick={() => {toggleShowPassword()}}
                  >
                    <AiFillEye size={'1.1rem'} />
                  </Button>
                </Box>
              </FormControl>
              {
                !isLogin && (
                  <FormControl>
                <FormLabel>Подтвердите пароль</FormLabel>
                  <Box display={'flex'} alignItems={'center'}>
                    <Input name='confirmPassword' value={form.confirmPassword} onChange={handleChange} type={getInputType(showPassword)} placeholder='Повторите пароль' />
                    <Button 
                      variant={'ghost'} 
                      px={0} 
                      onClick={() => {toggleShowConfirmPassword()}}
                    >
                      <AiFillEye size={'1.1rem'} />
                    </Button>
                  </Box>
                </FormControl>
                )
              }
              <Box 
                display={'flex'} 
                justifyContent={'center'} 
                alignItems={'center' }
                pt={4}
              >
                <Button px={14} colorScheme='cyan' onClick={() => {
                  handleSubmit()
                  toast({
                    position: 'top',
                    title: 'Загрузка. Ожидайте',
                    description: "Мы получили ваш запрос. Ожидайте ответа от сервера.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                }}>
                  {
                    isLogin ?
                    <>
                      Войти
                    </>
                    :
                    <>
                      Зарегистрироваться
                    </>
                  }
                </Button>
              </Box>
            </CardBody>
            <CardFooter>
                {
                  isLogin ? 
                  <Box display='flex'>
                    <Text>Еще не зарегестрированы?</Text>
                    <Text 
                      fontStyle={'bold'} 
                      color='blue' 
                      px={1}
                      cursor={'pointer'}
                      onClick={() => {toggleFormType()}}
                    >
                      Регистрация
                    </Text>
                  </Box>
                  :
                  <Box display='flex'>
                    <Text>Уже зарегистрированы?</Text>
                    <Text 
                      fontStyle={'bold'} 
                      color='blue' 
                      px={1}
                      cursor={'pointer'}
                      onClick={() => {toggleFormType()}}
                    >
                      Войти
                    </Text>
                  </Box>
                }
            </CardFooter>
            <Box p={4}>
                {
                  error ?
                    <Box>
                      <Text color='red' textAlign={'center'}>{error}</Text>
                    </Box> :
                  null
                }
                </Box>
          </Card>
        </Box>
      </Container>
  )
}

export default Auth