import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from "react-icons/hi";

import { CountryContext } from '../../context/CountryContext';
import { Container } from '../../layout/container/Container';
import { Layout } from '../../layout/Layout';
import { ButtonComponent } from '../button/Button-component';

import styles from './Country.module.scss';

export const CountryComponent = () => {
    const { countries } = useContext(CountryContext)
    //access the state in the current route which was passed using the useNavigate hook
    const location = useLocation()
    const nav = useNavigate()
    const borderNav = useNavigate()
    const {
        capital,
        name,
        region,
        population,
        flags,
        subregion,
        tld,
        currencies,
        languages,
        borders
    } = location.state
    const { common, nativeName } = name
    const { svg } = flags

    //navigate to previous route
    const back = () => {
        nav(-1)
        
    }

    //use the object key to the native language then get the nativeName of that country
    const objectKeys = Object.keys(nativeName)
    const lang = objectKeys[objectKeys.length - 1]
    const Native_name = nativeName[lang].common

    //use object keys to get the currency of that country
    const currenciesKeys = Object.keys(currencies)

    //languages
    const Language = Object.keys(languages)

    const Lang = Language.filter((_, idx) => idx < 5).map((lang, idx) => {
        return (
            <span key={idx}>{languages[lang]}
                {idx === Language.length - 1 ? "" : " , "}
            </span>
        )
    })

    //map out the currencies
    const Currency = currenciesKeys && currenciesKeys.map((curr, idx) => {
        return (
            <span className={styles.country_capital} key={idx}>{
                currencies[curr].name}{idx === currenciesKeys.length - 1 ? "" : " , "}
            </span>
        )
    })

    //map out the Capitals
    const Capital = capital && capital.map((cap, idx) => {
        return (
            <span className={styles.country_capital} key={idx}>{cap}
                {idx === capital.length - 1 ? "" : ' , '}
            </span>
        )
    })

    //map out the borders
    const Border = borders && borders.map((border, idx) => {
        const Border = (country) => {
            const isolatedBoder = countries.filter(co => co.cca3.includes(country))
            borderNav(`/${country}`, {
                state: isolatedBoder[0]
            })
        }
        return (
            <ButtonComponent buttonType={`border`} onClick={() => Border(border)} key={idx}>{border}</ButtonComponent>
        )
    })

    //format population
    const formatted = new Intl.NumberFormat().format(population)
    return (
        <div>
            <Layout>
                <Container>
                    <div className={`${styles.discription} text`}>
                        <ButtonComponent onClick={back}>
                            <HiArrowNarrowLeft />
                            Back
                        </ButtonComponent>
                        <div className={`${styles.country_detail} text`}>
                            <img src={svg} alt="country-flag" className={styles.details_img} />
                            <div className={`${styles.second}`}>
                                <div className={`${styles.details_content}`}>
                                    <span className={`${styles.common} alt-text`}>{common}</span>
                                    <div className={`${styles.country_info}`}>
                                        <div className={`${styles.info_details} alt-text`}>
                                            <span>Native Name: <span>{Native_name}</span></span>
                                            <span>Population: <span>{formatted}</span></span>
                                            <span>Region: <span>{region}</span></span>
                                            <span>Sub Region: <span>{subregion}</span></span>
                                            <span>Capital: <span>{Capital}</span>
                                            </span>
                                        </div>
                                        <div className={`${styles.info_details} alt-text`}>
                                            <span>Top Level Domain: <span>{tld}</span></span>
                                            <span className={styles.crown}>Currencies: <span>{Currency}</span></span>
                                            <span>Languages: {Lang}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.country_border}`}>
                                    <span>Border Countries:</span>
                                    <div className={`${styles.borders}`}>
                                        {Border ? Border : 'No data'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
    )
    

}