import React from 'react'
import Patientcard from './Patientcard'
import ps from './images/patient-speak_bg.jpg'
import './Patientspeak.css'

const Patientspeak = () => {

    let box = document.querySelector('.patient-container')
const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width
    console.log("")


}

const btnpressnext = () => {
    let width = box.clientWidth;
    console.log('jkjk', width)
    box.scrollLeft = box.scrollLeft + width
    console.log("klkl", box.scrollLeft)
}

  return (
    
      <div className="pat">
        <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

        <div className="patient-container">
            <Patientcard cardno='1'/>
            <Patientcard cardno='2'/>
            <Patientcard cardno='3'/>
            <Patientcard cardno='4'/>
            <Patientcard cardno='5'/>
            <Patientcard cardno='6'/>
            <Patientcard cardno='7'/>
            <Patientcard cardno='8'/>
            <Patientcard cardno='9'/>
        </div>
      </div>
    
  )
}

export default Patientspeak
