import { useEffect, useState } from "react"

function useLocalStorage(storageName) {

  const [data , setData] = useState( localStorage.getItem(`${storageName}`) ? JSON.parse(localStorage.getItem(`${storageName}`)) : [] )

  useEffect(() => {
    localStorage.setItem(`${storageName}`, JSON.stringify(data))
  }, [data])
  

  function AddToItem() {
    setData([...data, "salam"])
}

  return [data, AddToItem]
}

export default useLocalStorage