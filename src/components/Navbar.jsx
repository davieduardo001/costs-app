import React from 'react'

import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../imgs/costs_logo.png'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/newproject'>Novo projeto</Link>
    </nav>
  )
}

export default Navbar