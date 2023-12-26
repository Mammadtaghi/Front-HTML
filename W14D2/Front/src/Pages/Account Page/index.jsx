import React from 'react'
import './index.scss'
import { useUser } from '../../Context/userContext'

function Account() {

  const { user, setUser } = useUser()

  function handleLogout() {
    setUser({username:'', role:"", token:""})
  }


  return (
    <main>
      <h1>{user.username}</h1>
      <h2>{user.role}</h2>
      <button onClick={handleLogout}>Log Out</button>

    </main>
  )
}

export default Account