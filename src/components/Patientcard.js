import React from 'react'
import './Patientcard.css'

const Patientcard = (props) => {
  return (
    <div className='patcard'>
      Mycard No. {props.cardno}
    </div>
  )
}

export default Patientcard
