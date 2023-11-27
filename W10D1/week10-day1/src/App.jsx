import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './Home.jsx';
import AboutPage from './About.jsx';
import ContactPage from './Contact.jsx';
import Layout from "./Layout.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
