import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  
  return (
  <div className="LogoSearch dropdown">
    <img src={Logo} alt="" />
    <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
            <UilSearch/>
        </div>
    </div>
    <div class="dropdown-content">
    <p>Hello World!</p>
    <p>Hello</p>
  </div>
  </div>
    )
}
    
export default LogoSearch