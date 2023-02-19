import React from 'react'
import sideimg from './images/doctor_left_side.png'
import './Description.css';
//  import {Link} from 'rea'
// import {Link} from 'react-scroll'
// import sidebar from  './images/left-side-circle-2.png'


// import { animateScroll as scroll } from 'react-scroll'
// var Scroll = require('react-scroll');
// var scroll = Scroll.animateScroll;
const Description = () => {
  return (
    <div className="parent" >
      <div className='cont'>
        <img src={sideimg} alt="" />
      </div>



      <div className="nnn">
        <h2>Experience Advanced Dentistry At Dental Care</h2>
        <br />
        <b>Dental Care is where we try to naturally solve your problem, with the latest and innovative technology. Our motivation is your healthy and vital gums; that is why Dental Care will always ensure that you visit us to improve your oral hygiene and get an early remedy to your problems</b>

        <b>We provide oral care solutions for all dental problems, including Root Canal Treatment, teeth whitening, teeth cleansing and polishing, complete or partial dentures, orthodontic treatment and more. With our team of expert dentists, we take care of all your dental needs and ensure complete sterilization in all our procedures.

        </b>

        <div className="button">
          <a href="#appointment">BOOK AN APPOINTMENT</a>
         
        </div>


      </div>





    </div>
  )
}

export default Description
