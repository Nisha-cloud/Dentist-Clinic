import React from 'react'
// import frontImage from './images/bg-nav.jpg'
// import Form from './Form.jsx'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Description from './Description';
import Clinic from './Clinic';
import Services from './Services'
import Cardcarousel from './Cardcarousel';
import FAQ from './FAQ'
import Gmap from './Gmap'
// import Form from './Form'
import './Form.css'
import Footer from './Footer'
import { useState } from 'react';


const Home = () => {

  const navigate = useNavigate()



  const initial = [{
    firstName: "",
    lastName: "",
    email: "",
    phone: "",


  }]

  const [credentials, setCredentials] = useState(initial)
  const [disable, setDisable] = useState(true)
  const [hide, setHide] = useState('none')
  const setButton = () => {
    if (hide === 'none') {
      setHide('flex')
    }
    else {
      setHide('none')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    // setDisable(false)
    console.log("happy", credentials.phone)
    if ((credentials.phone.length > 8) && (credentials.firstName.length > 0)) {

      setDisable(false)
    }
    e.preventDefault()
  }

  const letcheck = () => {
    console.log("this form id wksbsv")
    navigate('/confirmation')
  }

  return (
    <>
      <div className="all" id='appointment'>

        <div className="mainpic_right">
          <div className="forme">
            <p className='text-center m-1 text-white fw-bolder mt-1 ' style={{ fontSize: '32px' }}>Book An</p>
            <p className='text-center m-1 text-white fw-bolder mt-1 mb-4' style={{ fontSize: '32px' }}>Appointment Today</p>
            <form onSubmit={letcheck}>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" name='firstName' className="form-control" onChange={onChange} />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" name='lastName' className="form-control" onChange={onChange} />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" name='email' className="form-control" onChange={onChange} />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="text" id="form3Example4" name='phone' className="form-control" onChange={onChange} />
                <label className="form-label" htmlFor="form3Example4">Phone Number</label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" style={{ width: '50px', height: '20px' }} type="checkbox" value="flex" id="form2Example33" default={'checked'} name='isSaw' onClick={setButton} />
                <label className="form-check-label" htmlFor="form2Example33" style={{ fontSize: '13px', fontWeight: '10px' }}>
                  I declare that the information provided above is correct. I would like to receive communication about Dental Care services.
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <div className="d-flex justify-content-center">
                <button type="submit" disabled={disable} style={{ display: `${hide}` }} className="btn btn-light btn-block mb-4">SUBMIT</button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <Description />
      <Clinic />
      <Services />
      <Cardcarousel />
      <FAQ />
      <Gmap />
      <Footer />
      {/* <Form/> */}
    </>




  )
}

export default Home
