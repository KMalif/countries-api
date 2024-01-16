
import React, { useContext } from 'react'

import { ThemeContext } from '@emotion/react'

import styles from './Layout.module.scss'
import { Navigation } from './navigation/Navigation'


export const Layout = ({children}) => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`${styles.main} bg`}>
        <Navigation/>
        {children}    
    </div>
  )
}
