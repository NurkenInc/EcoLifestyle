import React, { useEffect, useState } from 'react'
import {
  Container,
  Box,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Button
} from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'

import { 
  Logotype,
  CustomMenu  
} from '../index'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  const logout = () => {
      dispatch({ type: "LOGOUT" });

      navigate("/");

      setUser(null);
  }

  return (
    <Box 
      as={'nav'}
      w={'100%'}
      css={{ backdropFilter: 'blur(10px)' }}
      bg={'#ecedbd'}
      zIndex={2}
      position={'fixed'}
      top={0}
    >
      <Container 
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.xl'}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'80%'}
        >
          <Box padding={'2'}>
            <Logotype />
          </Box>
          <Box 
            display={{ base: 'none', md: 'flex' }}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <List
              display={'flex'}
              gap={8}
              fontStyle={'normal'}
            >
              <Link onClick={() => {navigate('/')}} fontWeight={'normal'} _hover={``}>
                <ListItem>Главная</ListItem>
              </Link>
              <Link onClick={() => {navigate('/calculator')}} fontWeight={'normal'} _hover={``}>
               <ListItem>Калькулятор потребления ресурсов</ListItem>
              </Link>
              <ListItem>
                <Menu>
                  <MenuButton fontWeight={'normal'}>Календари</MenuButton>
                  <MenuList>
                    <Link onClick={() => {navigate('/goodscalendar')}} fontWeight={'normal'} _hover={``}>
                      <MenuItem>Календарь устойчивых покупок</MenuItem>
                    </Link>
                    <Link onClick={() => {navigate('/eventscalendar')}} fontWeight={'normal'} _hover={``}>
                      <MenuItem>Календарь мероприятий и событий</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </ListItem>
              <Link onClick={() => {navigate('/#articles')}} href='#articles' fontWeight={'normal'} _hover={``}>
                <ListItem>Статьи</ListItem>
              </Link>
              <Link onClick={() => {navigate('/#about')}} fontWeight={'normal'} _hover={``} href='#about'>
                <ListItem>О нас</ListItem>
              </Link>
              <Link onClick={() => {navigate('/#contacts')}} fontWeight={'normal'} _hover={``} href='#contacts'>
                <ListItem>Контакты</ListItem>
              </Link>
            </List>
          </Box>
        </Box>
        <Box 
          padding={'2'} 
          flex={'1'} 
          textAlign={'right'}
        >
          <Box display={{ base: 'none', md: 'inline-block'}}>
              <Link
                _hover={``}
              >
                {
                  user ?
                  <Menu>
                    <MenuButton>
                      <Box display={'flex'} alignItems={'center'} >
                        <FaUserCircle />
                        {user.result.name}
                      </Box>
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => {logout()}}>Выйти</MenuItem>
                    </MenuList> 
                  </Menu> :
                    <Button colorScheme={'teal'} onClick={() => {navigate('/auth')}}>
                      Войти
                    </Button>
                }
              </Link>
          </Box>
          <Box
            display={{ base: 'inline-block', md: 'none' }}
            marginLeft={2}
          >
            <CustomMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar