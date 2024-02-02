import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Overview from './pages/overview';
import Suggestion from './pages/suggestion';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/suggestion" element={<Suggestion />}/>

  </Routes>
  </BrowserRouter>
   
}