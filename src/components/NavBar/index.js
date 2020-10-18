import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdPersonOutline, MdFavoriteBorder } from 'react-icons/md'

const SIZE = '32px';
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE}/></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
