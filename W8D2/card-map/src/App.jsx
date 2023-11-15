import './App.css';
import Card from './Card';

function App() {
  const API = [
    {
        img:"https://creativio.io/founders-special/images/grid-img4.webp",
        name:"Creativio",
        price:"$19.00",
        stars: 4.0
    },
    {
        img:"https://creativio.io/founders-special/images/grid-img2.webp",
        name:"Star Coconut",
        price:"$15.00",
        stars: 4.9
    },
    {
        img:"https://creativio.io/founders-special/images/agencies-after.webp",
        name:"Cosmetle",
        price:"$22.00",
        stars: 3.7
    },
    {
        img:"https://creativio.io/founders-special/images/photographers-after.webp",
        name:"Metal Flask",
        price:"$27.00",
        stars: 4.5
    }
]

  return (
    <>
    {API.map((item,i)=>(
       <Card key={i} {...item}/>
    ))}
    </>
  )
}

export default App;
