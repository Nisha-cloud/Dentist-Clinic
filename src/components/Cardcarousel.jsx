import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card'
import bgimg from './images/patient-speak_bg.jpg'

const Cardcarousel = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const productData = [
    {
      id: 1,
      desc: "I went to Dental Care Vikas Puri for my multiple dental fillings and my experience was great. Dr. Divya was very professioThe user didn't write a review, and has left just a rating.l and answered all of my questions. I couldn’t have been in any more safer hands. Thank you Dental Care.",
      name: "Shikhar Dhawan"
    },
    {
      id: 2,
      desc: "Best place to get your dental needs fulfilled.Empathetic and energetic doctors with soft behaviour skills.Only tell you what is needed and what can be avoided. I was told by 2 dentists for implants and no other options were explained. Dr.Ambar and Dr.Akshat explained me about all other options including implants. I chose with multiple dental crowns over my remaining teeth. It has been more than a year since the treatment and I am fully satisfied.",
      name: "Manoj Dhillon"
    },
    {
      id: 3,
      desc: "I highly recommend Dr. Shweta of Dental Care clinic to everyone. Most of us are generally apprehensive regarding the outcome and overall experience would be like! But Dr. Shweta conducted my dental bridges job so superbly that I still have no discomfort and almost have picture perfect smile! Not only that she then did root caThe user didn't write a review, and has left just a rating.l for my mother and so far all I can say is she is highly aced and accurate as dentist.",
      name: "Komal Pandey"
    },
    {
      id: 4,
      desc: "I got my mother for her root canal treatment as she was complaining for severe tooth pain, I got an emergency appointment and Dr. Indu Yadav and the staff was really helpful in every possible way. The appointments were on time, there was never a delay and every procedure went smoothly! Cheers to Dental Care to make this a hassle-free, hygienic and yet a pleasant experience.",
      name: "Varun Mittal"
    },
    {
      id: 5,
      desc: "I would highly recommend Dr Ashima Chugh for Dental Braces treatment. I just got my braces removed today and I am delighted with the results. Dr Ashima is quite informative and assisted me well throughout the process. She is very understanding and explained me about all the procedures very well and was quite proactive in reverting to all my queries during the treatment.",
      name: "R.K Pandey"
    },
    {
      id: 6,
      desc: "I am very pleased with the dental services offered by Dental Care clinic. The dentists are very friendly, have a sense of empathy and always look to give their best. A good place for treatment",
      name: "Swati Mishra"
    },
    {
      id: 7,
      desc: "Its a high quality dental clinic with an experienced &amp; highly qualified dentists.",
      name: "Chitrangee Chandra"
    },
    {
      id: 8,
      desc: "I visited the Dental Care Clinic in rohini sector 11 by making an online appointment for getting the filling in one teeth and also cleaning and i would say it was one of the best experience i had. Doctors are very generous and emphatic. They try to give you always the best and worthy advice. There were two female doctors I believe and both were really helpful. I would like to recommend the clinic to my friends and family for sure.",
      name: "Shubhangi Singh"
    },
    {
      id: 9,
      desc: "Was One of my best dental Clinic to go for,has quality doctors with great skills. Keep their patients at ease.lil adjustments to seating area for visitors would be wonderful ...Good luck",
      name: "Abhishek Kumar"
    },
    {
      id: 10,
      desc: "I went to Dental Care Vikas Puri for my multiple dental fillings and my experience was great. Dr. Divya was very professioThe user didn't write a review, and has left just a rating.l and answered all of my questions. I couldn’t have been in any more safer hands. Thank you Dental Care.",
      name: "Pradhumn Yadav"
    },
    {
      id: 11,
      desc: "I got my mother for her root canal treatment as she was complaining for severe tooth pain, I got an emergency appointment and Dr. Indu Yadav and the staff was really helpful in every possible way. The appointments were on time, there was never a delay and every procedure went smoothly! Cheers to Dental Care to make this a hassle-free, hygienic and yet a pleasant experience.",
      name: "Vagisha Jain"
    },
    {
      id: 12,
      desc: "I visited the Dental Care Clinic in rohini sector 11 by making an online appointment for getting the filling in one teeth and also cleaning and i would say it was one of the best experience i had. Doctors are very generous and emphatic. They try to give you always the best and worthy advice. There were two female doctors I believe and both were really helpful. I would like to recommend the clinic to my friends and family for sure.",
      name: "Shwetank Kushwaha"
    },

  ]

  const product = productData.map(item => (
    <Card key={item.id} desc={item.desc} name={item.name}/>
  ))

  return (
    <div className='App' style={{width: '100vw', height: '90vh', backgroundImage: `url(${bgimg})`}}>
      <b className='ps' style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop:'0vh', fontSize: '250%', fontWeight: 'bold', color: 'white'}}>Patient Speak</b>
      <Carousel responsive={responsive}>
       {product}
      </Carousel>;
    </div>
  )
}

export default Cardcarousel
