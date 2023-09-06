import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return ( 
   <Link to='/' class="app-brand-link w-100 d-flex justify-content-center">
       <span class="app-brand-logo demo">
           <img src="/assets/img/Residence.png"
                alt="building-img"
                class="d-block rounded"
                height="40"
                width="40"
                id="Logo-pic" />
       </span>
       <span class="app-brand-text demo menu-text fw-bolder ms-2 text-uppercase" style={{
    color: '#5f61e6',
    fontFamily: 'Trebuchet MS, sans-serif',
  }}>Rehaish Gah</span>
   </Link>
  )
}

export default Logo
