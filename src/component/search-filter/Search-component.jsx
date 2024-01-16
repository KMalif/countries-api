import styles from './Search.module.scss'
// import { useContext, useEffect, useState } from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { TbChevronDown } from "react-icons/tb";
// import { CountryContext } from '../../context/CountryContext';

const SearchComponent = () => {


    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']


    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <RxMagnifyingGlass className={styles.serchIcon}/>
                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} />
                    {
                        <VscClose className={styles.serchIcon} />
                    }
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} >
                
                </div>
                <div className={`${styles.options} alt-bg`}>
                    {
                        options.map(option => {
                            return (
                                <div key={option} className={`${styles.region}`}>
                                    <p className={styles.option}>{option}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default SearchComponent