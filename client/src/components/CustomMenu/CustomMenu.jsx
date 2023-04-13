import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Link
} from '@chakra-ui/react'

import { Link as PageLink, useNavigate } from 'react-router-dom'

import { HamburgerIcon } from '@chakra-ui/icons'

const CustomMenu = () => {
  const navigate = useNavigate()

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label={'Options'}
      />
        <MenuList>
          <PageLink to={'/'}>
            <MenuItem>Главная</MenuItem>
          </PageLink>
          <PageLink to={'/auth'}>
            <MenuItem>Регистрация/Вход</MenuItem>
          </PageLink>
          <PageLink to={'/calculator'}>
            <MenuItem>Калькулятор потребления ресурсов</MenuItem>
          </PageLink>
          <PageLink to={'/eventscalendar'}>
            <MenuItem>Каленьдар меропрятий и событий</MenuItem>
          </PageLink>
          <PageLink to={'/goodscalendar'}>
            <MenuItem>Каленьдар устойчивых покупок</MenuItem>
          </PageLink>
          <Link onClick={() => {navigate('/')}} href={'#articles'}>
            <MenuItem>Новости/Статьи</MenuItem>
          </Link>
          <Link onClick={() => {navigate('/')}} href={'#about'}>
            <MenuItem>О нас</MenuItem>
          </Link>
          <Link onClick={() => {navigate('/')}} href={'#contacts'}>
            <MenuItem>Контакты</MenuItem>
          </Link>
        </MenuList>
    </Menu>
  )
}

export default CustomMenu;