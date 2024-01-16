import React, { useContext } from 'react'
import { Layout } from '../../layout/Layout'
import { Container } from '../../layout/container/Container'

import styles from './Home.module.scss'
import { CountryCard } from '../../component/country-card/CountryCard'
import { CountryContext } from '../../context/CountryContext'
import SearchComponent from '../../component/search-filter/Search-component'

export const Home = () => {

  return (
    <div>
      <Layout>
        <Container>
          <div className={`${styles.home} bg text`}>
            <SearchComponent/>
            <div className={styles.contain}>
              <CountryCard/>
            </div>
          </div>    
        </Container>
      </Layout>
    </div>
  )
}
