import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <Link to=''>Go Home</Link>
        <Link to='details'>Go Details</Link>
        <Link to='contact'>Go Contact</Link>
    </footer>
  )
}

export default Footer