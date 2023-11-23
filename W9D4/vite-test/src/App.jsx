import './App.css'
import useLocalTheme from './Hooks/useLocalTheme'
import useTheme from './Hooks/useTheme'


function App() {

  const [changeTheme, isLight] = useTheme()
  
  // console.log(useLocalTheme());

  return (
    <div className='main'>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam inventore, dolor explicabo laudantium facilis eum id eligendi at praesentium. Ex, beatae nulla! Dolorum aliquid similique aperiam voluptas architecto eveniet?</p>

      <h1>Title</h1>

      <button onClick={changeTheme} >Change Theme</button>


    </div>
  )
}

export default App
