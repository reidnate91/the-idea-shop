import React from 'react'
import { Normalize } from '@smooth-ui/core-sc'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

import RouterContent from '../Router'
import RightNav from './RightNavigation'
import {
  DEFAULT_PADDING,
  FOURTH_PADDING,
  PRIMARY,
  SECONDARY,
  TERCIARY,
  RED, HALF_PADDING,
} from '../../styles'

const Main = styled.main`
  display: flex;
  flex: 1;
  background: ${TERCIARY.alt300};
`
const Header = styled.header`
  display: flex;
  padding: ${FOURTH_PADDING} ${DEFAULT_PADDING};
  background: ${PRIMARY.alt700};
  color: ${TERCIARY.alt300};
`

const Brand = styled.h3`
  display: inline-block;
  flex: 2;
  color: ${TERCIARY.alt300};
`

const UserNavigation = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${FOURTH_PADDING} 0px;
  margin-left: ${DEFAULT_PADDING};
  
  nav {
    display: none;
    background: red;
    padding: ${DEFAULT_PADDING};
  }
  
  nav:hover {
    display: block;
  }
  
  nav a {
    display: block;
  }
`

const UserName = styled.a`
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const ShoppingCart = styled(UserNavigation)`
  padding: ${DEFAULT_PADDING};
  &:hover {
    color: ${RED.primary};
    background: ${PRIMARY.alt900};
  }
`

const Footer = styled.footer`
  display: flex;
  padding: ${DEFAULT_PADDING};
  background: ${SECONDARY.alt700};
  color: ${SECONDARY.alt100};
`
const MainContent = styled.article`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

// FaShoppingCart

export default () => (
  <>
    <Normalize />
    <Header>
      <Brand>The Idea Shop</Brand>
      <ShoppingCart>
        <FaShoppingCart />
      </ShoppingCart>
      <UserNavigation>
        <UserName>Tyler Garlick</UserName>
        {/*<nav>*/}
          {/*<a href="#">Orders</a>*/}
          {/*<a href="#">Profile</a>*/}
          {/*<a href="#">Logout</a>*/}
        {/*</nav>*/}
      </UserNavigation>
    </Header>
    <Main>
      <MainContent>
        <RouterContent />
      </MainContent>
      <RightNav>
        Some things
      </RightNav>
    </Main>
    <Footer>
      This is my footer..
    </Footer>
  </>
)
