import React from 'react'
import ContactSucc from '../../component/ContactSucc/ContactSucc'
import './Contact.css'
import Facebook from '../../component/Facebook/Facebook'
import Login from '../../component/ContactSucc/Login'
import Navebar from '../../component/Navebar/Navebar'
import MapContainer from '../../component/mapContainer/mapContainer'
const Contacts = () => {
  return (
    <div className='contact'>
      <Navebar />
      <div className='facebook'>
      <Facebook/>

      </div>
      
<div className='succersale'>
      <ContactSucc />
      </div>
      <Login/>
      <MapContainer/>
    </div>
  )
}

export default Contacts