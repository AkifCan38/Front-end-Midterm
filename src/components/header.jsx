import React from 'react'
import resim1 from '../img/logo-resmi.jpg';
import './header.css'

function Header() { 
    return (
      <div>
        <img src={resim1} alt="" className='resim' />
      </div>
    )
  }

export default Header