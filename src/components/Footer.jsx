import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FaFacebook/>
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaLinkedin/>
          </li>
        </ul>

        <p>
          <span>Costs</span> &copy; 2023
        </p>
    </footer>
  )
}

export default Footer