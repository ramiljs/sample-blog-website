import { FC } from 'react'
import './layout.css'
import { Outlet , Link } from 'react-router-dom'
import {
  layoutContainerStyle ,
  ulStyle ,
  liStyle ,
  wrapStyle ,
  themeButtonStyle ,
  langButtonStyle
} from './layout.style'
import {
  Box ,
  FormControl ,
  FormLabel ,
  Switch ,
  Menu ,
  MenuButton ,
  MenuList ,
  MenuOptionGroup ,
  MenuItemOption ,
  Button ,
  Tag
} from '@chakra-ui/react'

export const Layout: FC = () => {
  return (
    <div style={layoutContainerStyle}>
      <nav>
        <ul style={ulStyle}>
          <li className='menu-button'>
            <Link to='/Menu'>Menu</Link>
          </li>
          <li className='nav-left' style={liStyle}>
            <Link to='/Home'>Home</Link>
          </li>
          <li className='nav-left' style={liStyle}>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-left' style={liStyle}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav-right' style={liStyle}>
            <ul style={wrapStyle}>
              <Box style={langButtonStyle}>
                <Menu closeOnSelect={false}>
                  <MenuButton variant='outline' as={Button} colorScheme='teal'>
                    Language
                  </MenuButton>
                  <MenuList minWidth='150px'>
                    <MenuOptionGroup defaultValue='rus' title='Lang' type='radio'>
                      <MenuItemOption value='rus'>
                        Rus
                      </MenuItemOption>
                      <MenuItemOption value='eng'>
                        Eng
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
              <Box style={themeButtonStyle}>
                <Tag variant='outline' colorScheme='teal' sx={{ padding: '6px' }}>
                  <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                      Light/Dark
                    </FormLabel>
                    <Switch colorScheme='teal' size='lg' />
                  </FormControl>
                </Tag>
              </Box>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}