import React from 'react'
import './index.scss'
import { useUser } from '../../Context/userContext'

function Account() {

  const { user } = useUser()

  return (
    <main>
      <h1>{user.username}</h1>
      <h2>{user.role}</h2>



    </main>
  )
}

export default Account