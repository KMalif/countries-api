import React from 'react'

import styles from './CountryCard.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'


export const CountryCard = ({country}) => {
  const { capital, name, region, population, flags } = country
    const { common } = name
    const { png } = flags

    const formatted = new Intl.NumberFormat().format(population)
    const nav = useNavigate()
    const loc = useLocation()

    const dynamic = common.replaceAll(' ', '-')

    const Navigate = () => {
        nav(dynamic, {
            state: country
        })
    }
  
    const Capital = capital && capital.filter((_, idx) => idx < 2).map((cap, idx) => {
        return (
            <span key={idx} className={styles.country_details}>{cap}
                {idx === capital.length - 1 ? "" : " , "}
            </span>
        )
    })

  return (
    <div className={`${styles.country_card}`}>
        <img src={png} alt="coutry_flag" className={styles.country_flag} onClick={Navigate}/>
        <div className={styles.card_content}>
          <span className={`${styles.country_name} 'alt-text'`}>{common}</span>
          <div className={styles.country_info}>
            <span>Population : <span className={styles.country_details}>{formatted}</span></span>
            <span>Region : <span className={styles.country_details}>{region}</span></span>
            <span className={styles.capital}>Capital : {Capital}</span>
          </div>
        </div>
    </div>
  )
}
