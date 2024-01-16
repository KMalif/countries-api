import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { CountryComponent } from "./component/country-component/CountryComponent";



function App() {
  const {theme} = useContext(ThemeContext)

  return (
   <div className={theme}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path=":country" element={<CountryComponent />} />
      </Routes>
   </div>
  )
}

export default App
