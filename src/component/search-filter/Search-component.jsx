import { useContext, useEffect, useState } from 'react'

import { CountryContext } from '../../context/CountryContext';
import { RxMagnifyingGlass } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { TbChevronDown } from "react-icons/tb";

import styles from './Search.module.scss'

const SearchComponent = () => {

    const {
        filterValue,
        setFilterValue,
        setSearchValue,
        isActive,
        setIsActive,
        searchValue,
        setSearch,
        search
    } = useContext(CountryContext)

    const [clear, setClear] = useState('')

    const active = () => {
        setIsActive(current => !current)
    }

    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const onChange = (event) => {
        const value = event.target.value
        setSearchValue(value)
        setClear(value)
    }

    const searchCountries = () => {
        setSearch(searchValue)
    }

    useEffect(() => {
        searchCountries()
    }, [search])

    const clearInput = () => {
        setSearchValue("")
        setSearch('')
        setClear("")
    }

    const filterRegion = (option) => {
        setFilterValue(option)
    }

    const clearRegion = () => {
        setFilterValue('')
        setIsActive(true)
    }
    return (
        <div className={`${styles.searchContainer} `}>
            <div className={`${styles.searchArea} alt-bg`}>
                <RxMagnifyingGlass className={styles.serchIcon} onClick={searchCountries} />
                <input type="text" placeholder='Search for a country...' value={clear} className={`${styles.homeInput} alt-bg text`} onChange={onChange} />
                {
                    searchValue.length > 0 && <VscClose className={styles.serchIcon} onClick={clearInput} />
                }
            </div>
            <div className={`${styles.drop_down_container} `}>
                <div className={`${styles.drop_down_current} alt-bg`} onClick={active}>
                    {filterValue.length > 0 ? <span>{filterValue}</span> : <span>Filter by region</span>}
                    {filterValue.length > 0 ? <VscClose className={styles.drop_down_icon} onClick={clearRegion} /> : <TbChevronDown className={styles.drop_down_icon} />}
                </div>
                <div className={`${styles.options} alt-bg`}>
                    {
                        isActive && options.map(option => {
                            return (
                                <div key={option} className={`${styles.region}`} onClick={() => setIsActive((curr) => !curr)}>
                                    <p className={styles.option} onClick={() => filterRegion(option)}>{option}</p>
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