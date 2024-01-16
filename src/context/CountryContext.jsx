import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext({
    countries: [],
    setCountries: () => {}
})

export const CountryProvider = ({children}) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            try{
                const data = await axios.get('https://restcountries.com/v3.1/all')
                setCountries()

            }catch(error){
                console.log(error)
            }
        }
        getCountries()
    }, )

    const value = {countries, setCountries}
    return(
        <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
    )
}