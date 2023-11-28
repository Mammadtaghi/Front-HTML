import './App.css'
import Home from './Home'
import { CountProvider } from './CountContext'


function App() {

  return (
    <CountProvider>
      <Home/>
    </CountProvider>
  )
}

export default App
