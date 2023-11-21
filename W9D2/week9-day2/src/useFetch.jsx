import { useEffect } from 'react'

const useFetch= async (url, cb)=>{
    useEffect(() => {
      fetch(url)
      .then(res=>res.json())
      .then(data=>cb(data))
    }, [url, cb])
    
}

export default useFetch