import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <navbar className='navbar'>
        <div className='left'>
          <h2>ULIZA</h2>
          <h3 ><Link className='navLink' to ='/'>Home</Link></h3>
        </div>
        <div className='right'>
          <p> <Link className='navLink' to = '/Questions'>Questions</Link></p>
          <p><Link className='navLink' to = '/Profile'>Profile</Link></p>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar
