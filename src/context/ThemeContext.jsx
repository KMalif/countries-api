import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { }
})

export const ThemeContextProvider = ({children}) => {

    const currentTheme = localStorage.getItem('countries-theme')

    const [theme, setTheme] = useState(currentTheme ?? 'light')

    useEffect(() => {
        localStorage.setItem('countries-theme', theme)
    },[theme])

    const themeValue = {theme, setTheme}

    return(
        <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
    )

}