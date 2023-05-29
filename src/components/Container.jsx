import React from 'react'

import styles from './Container.modules.css'

const Container = (props) => {
  return (
    <div className={`container ${props.customClass}`}>
        {props.children}
    </div>
  )
}

export default Container