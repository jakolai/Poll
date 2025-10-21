import { useState } from 'react'

import viteLogo from './react.svg'
import {Link} from 'react-router'
import './Header.css'

function Header() {
  
  return (
    <>
      <header>
        
       <Link to="/"><img src={viteLogo} alt='logo'></img></Link>
         <ul>
         <Link to="/"><li>Forum</li></Link>
         <Link to="/"><li>Categories</li></Link>
         <Link to="/"><li>Login</li></Link>
         </ul>
      </header>
    </>
  )
}

export default Header
