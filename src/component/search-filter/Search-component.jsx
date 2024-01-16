import styles from './Search.module.scss'
// import { useContext, useEffect, useState } from 'react'
import { RxMagnifyingGlass } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { TbChevronDown } from "react-icons/tb";
// import { CountryContext } from '../../context/CountryContext';

const SearchComponent = () => {

    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <RxMagnifyingGlass className={styles.serchIcon}/>
                <input type="text" placeholder='Search for a country...' className={`${styles.homeInput} alt-bg text`} />
                
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} >
                
                </div>
                <div className={`${styles.options} alt-bg`}>
                </div>
            </div>
        </div>
    )
}
export default SearchComponent