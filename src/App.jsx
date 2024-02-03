import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Overview from './pages/overview';
import Suggestion from './pages/suggestion';
import Header from './components/header';
import Prescription from './pages/presciption';


export default function App() {
  return <BrowserRouter>
  <Header/>
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/suggestion" element={<Suggestion />}/>
    <Route path="/prescription" element={<Prescription />}/>

  </Routes>
  </BrowserRouter>
   
}