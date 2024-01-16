import React from 'react'

import styles from './CountryCard.module.scss'


export const CountryCard = ({country}) => {


  return (
    <div className={`${styles.country_card}`}>
        <img src="https://flagcdn.com/w320/mw.png" alt="coutry_flag" className={styles.country_flag} />
        <div className={styles.card_content}>
          <span className={`${styles.country_name} 'alt-text'`}>Country Name</span>
          <div className={styles.country_info}>
            <span>Population : <span className={styles.country_details}></span></span>
            <span>Region : <span className={styles.country_details}></span></span>
            <span className={styles.capital}>Capital : </span>
          </div>
        </div>
    </div>
  )
}
