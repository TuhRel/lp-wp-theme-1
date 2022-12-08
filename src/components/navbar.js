import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>LP</NavLogo>
      </NavContainer>
    </Nav>
  )
}

const Nav = Styled.nav`
  background-color: blue;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

const NavContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0.5rem;
  max-width: 1100px;
`

const NavLogo = Styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export default Navbar;