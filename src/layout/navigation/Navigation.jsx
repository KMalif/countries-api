import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../container/Container'
import { ThemeContext } from '../../context/ThemeContext'
import { FaMoon, FaRegMoon } from "react-icons/fa6"

import styles from './Navigation.module.scss'

export const Navigation = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const nav = useNavigate()

    const navigate = () => {
        nav('/')
    }

  return (
    <div className={styles[theme]}>
        <header className={`${styles.nav} ${styles.nav_bg}`}>
            <Container>
                <nav className={styles.nav_nav}>
                    <p onClick={navigate} className={styles.nav_text}>Where in the World?</p>
                    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {
                            theme === 'light' ? <div className={`${styles.themeContainer} ${styles.nav_text}`}>
                                <FaRegMoon/>
                                <p>Dark Mode</p>
                            </div>
                            : <div className={`${styles.themeContainer} ${styles.nav_text}`}>
                                <FaMoon/>
                                <p>Light Mode</p>
                            </div>
                        }
                    </div>
                </nav>
            </Container>
        </header>
    </div>
  )
}
