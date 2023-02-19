import React from 'react'
import './Gmap.css'

const Gmap = () => {
  return (
    <div>
      <iframe title='myFrame' className='abc' style = {{width: '100vw', height: '425px', transform: 'transalteY(-200px)'}} src="https://maps.google.com/maps?q=  dilshad garden&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe>
    </div>
  )
}

export default Gmap
