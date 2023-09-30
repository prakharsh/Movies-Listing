import React from 'react'
import App from './App'
import AboutPage from './AboutPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/about" element={<AboutPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing