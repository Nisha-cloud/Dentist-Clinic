import React from 'react'
import './Gmap.css'

const Gmap = () => {
  return (
    <div>
      <iframe className='abc' style = {{width: '100vw', height: '425px', transform: 'transalteY(-200px)'}} src="https://maps.google.com/maps?q=  dilshad garden&t=&z=12&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
  )
}

export default Gmap
