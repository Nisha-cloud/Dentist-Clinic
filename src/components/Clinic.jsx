import React from 'react'
import './Clinic.css'
import clinic from './images/clinic.png'
import dentalfilling from './images/dental-filling.png'
import toothext from './images/tooth-extraction.jpg'
import dentist from './images/dentist.png'
import rootcanal from './images/root-canal.png'
import implant from './images/implant-placed.png'



const Clinic = () => {
    return (
        <div className='beta'>
            <div className="maindiagcontainer">
                <p id='dc'>Best Dental Clinic Chain</p>

                <p id='dcp'>We don’t treat your pain we solve your Problem</p>

            </div>
            <div className="diag">

                <div className="diagone" style={{ maxWidth: '22vw' }}>
                    <img src={clinic} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />


                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>350+</p>
                        <p id='wrt'>Clinics</p>
                    </div>
                </div>
                <div className="diagtwo" style={{ width: '22vw' }}>
                    <img src={dentalfilling} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>2.8L+</p>
                        <p id='wrt'>Dental Fillings</p>
                    </div>

                </div>
                <div className="diagthree" style={{ width: '22vw' }}>
                    <img src={toothext} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>1.2L+</p>
                        <p id='wrt'>Tooth Extraction</p>
                    </div>
                </div>

                <div className="diagfour" style={{ width: '22vw' }}>
                    <img src={clinic} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>35,000+</p>
                        <p id='wrt'>Ortho Cases</p>
                    </div>
                </div>

                <div className="diagfive" style={{ width: '22vw' }}>
                    <img src={dentist} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>900+</p>
                        <p id='wrt'>Dentist</p>
                    </div>
                </div>

                <div className="diagsix" style={{ width: '22vw' }}>
                    <img src={rootcanal} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>1.1L+</p>
                        <p id='wrt'>Root Canal</p>
                    </div>
                </div>

                <div className="diagseven" style={{ width: '22vw' }}>
                    <img src={implant} alt="" style={{ width: '8vw', height: '15vh', border: '2px', borderRadius: '50%' }} />
                    <div className="diagcontainer" style={{ width: '7vw' }}>
                        <p id='wr'>50,000+</p>
                        <p id='wrt'>Implant Placed</p>
                    </div>
                </div>











            </div>

        </div>
    )
}

export default Clinic
