import { BrowserRouter, Routes, useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState } from 'react'
import Details from './Pages/Details/Details';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import './App.css'
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='/details/:id' element={<Details/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Route>
      <Route path='login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
