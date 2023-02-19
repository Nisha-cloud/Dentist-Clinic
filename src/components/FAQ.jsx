import React, { useState } from 'react'
import './FAQ.css'
import faqimg from './images/faq-clove.jpg'
// import call from './images/call-center-agent copy.png'

const FAQ = () => {

    const data = [
        {
            id: 1,
            question: "How can I book an appointment?",
            answer: "To book an appointment at any of our dental clinics, you can fill the form available at the top, and one of our representatives will get in touch with you. Alternatively, you can also give us a call on 6387501386."
        },
        {
            id: 2,
            question: "What are your dental clinic timings? ",
            answer: "Dental Care clinics remain open from 10 AM to 7 PM every day. However, in the case of unforeseen situations, the timing may differ on that particular day. Our Clinics are open on weekends."
        },
        {
            id: 3,
            question: "What modes of payment are acceptable at Dental Care Clinics? ",
            answer: "We accept payments through Cash/Credit Card/ Debit Card/ Paytm/ PhonePe or via /Airtel Money or any other UPI Payment methods."
        },
        {
            id: 4,
            question: "How frequently should I visit a dentist?",
            answer: "The frequency of a visit to a dentist depends on the condition of your oral health. It is advised that people must visit a dentist at least once in six months for regular dental check-ups. However, people with dental problems must visit once in three months or as directed by the dentists"
        },
        {
            id: 5,
            question: "What are the safety measures adopted by Dental Care?",
            answer: "Dental Care has adopted world-class measures to ensure the safety of patients. Our trademarked Stringent 4 step sterilisation process is a testimony to our commitment to high standards of safety &amp; sterilisation. We have enhanced our safety protocols under WHO Guidelines in response to the COVID crisis and are now operating with10X safety protocols."
        },


    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)

    }
    return (
        <div className='faq'>
            <div className="head">
                <p>Frequently</p>
            </div>
            <div className="wow">
                <p>Asked Questions</p>
            </div>
            <div className="accordian">
                {data.map((item, i) => (
                    <div className="item" key={item.id}>
                        <div className="ques"  onClick={() => toggle(i)}>
                             <h5>{item.question}</h5>
                            <h5><span>{selected === i ? '-' : '+'}</span></h5>

                        </div>
                        <div className={selected === i ? 'ans show' : 'ans'}>
                            {item.answer}
                        </div>
                    </div>

                ))}

            </div>

            <div className="sid">
                <img src={faqimg} alt="" />
            </div>

            <div className="need">
               {/* <p id='cal'> <img src={call} alt="" /></p> */}
                <p id='help'>Need help? Talk to Dental Care</p>
                <p id='con'>6387501386</p>
            </div>



        </div>
    )
}

export default FAQ
