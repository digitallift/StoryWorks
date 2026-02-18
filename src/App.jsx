import { Route, Routes } from 'react-router-dom'
import Homepage from "./Pages/homepage.jsx"
import Aboutpage from "./Pages/aboutpage.jsx"
import Contactpage from "./Pages/contactpage.jsx"
import Servicespage from "./Pages/servicespage.jsx"
import Loginpage from "./Pages/loginpage.jsx"

const App = () => {
  return (
    <div>
       <Routes>
         <Route path='/'  element={<Homepage/>}/>
         <Route path='/about' element={<Aboutpage/>}/>
         <Route path='/contact' element={<Contactpage/>}/>
         <Route path='/services' element={<Servicespage/>}/>
         <Route path='/login' element={<Loginpage/>}/>
       </Routes>
    </div>
  )
}

export default App
