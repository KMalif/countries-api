import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const {theme} = useContext(ThemeContext)

  return (
   <div className={theme}>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
   </div>
  )
}

export default App
