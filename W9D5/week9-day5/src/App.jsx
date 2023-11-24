import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pagePerData] = useState(10)
  const [sortBy, setSortBy] = useState('id')
  const [isReverse, setIsReverse] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    fetch('http://localhost:3000/products').then(res=>res.json()).then(data=>setData(data))

  }, [])

  const pageNumbers=[]

  for (let i = 1; i <= Math.ceil(data.length/pagePerData); i++) {
    pageNumbers.push(i)
    
  }

  const lastElementIndex = currentPage*pagePerData
  const firstElementIndex = lastElementIndex-pagePerData

  const PageDatas = useMemo(()=>data.slice(firstElementIndex,lastElementIndex),[data,currentPage])
  
  useMemo(()=>PageDatas.sort((a,b)=> a[sortBy] < b[sortBy] ? ( isReverse ? 1 : -1 ) : ( isReverse ? -1 : 1)), [handleSort])
  // useMemo(()=>PageDatas.filter((item)=>item.name.toLowerCase().includes(search.toLocaleLowerCase())), [handleInput])

  function handleSort(sortBy) {
    setSortBy(sortBy)
    setIsReverse(!isReverse)
  }

  function handleInput(value) {
    setSearch(value)
  }

  return (
    <>
    <input type="text" value={search} onInput={(e)=>handleInput(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th onClick={(e)=>handleSort(e.target.textContent.toLowerCase())}>ID</th>
            <th onClick={(e)=>handleSort(e.target.textContent.toLowerCase())}>Name</th>
          </tr>
        </thead>
        <tbody>
            {
              PageDatas && PageDatas.filter((item)=>item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((item)=>(
                <tr key={item.id}>
                  <td  >{item.id}</td>
                  <td >{item.name}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
            {
              pageNumbers && pageNumbers.map((page)=>(
                <button key={page} onClick={()=>setCurrentPage(page)} style={{cursor:'pointer'}} >{page}</button>
              ))
            }
    </>
  )
}

export default App
