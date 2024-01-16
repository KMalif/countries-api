import React from 'react'
import { Layout } from '../../layout/Layout'
import { Container } from '../../layout/container/Container'

import styles from './Home.module.scss'
import { CountryCard } from '../../component/country-card/CountryCard'

export const Home = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className={`${styles.home} bg text`}>
            
            <div className={styles.contain}>
              <CountryCard/>
            </div>
          </div>    
        </Container>
      </Layout>
    </div>
  )
}
