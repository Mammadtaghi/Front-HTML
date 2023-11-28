import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout/Layout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
