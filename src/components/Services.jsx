
import './Services.css'
import React, { useEffect, useState } from 'react'
import df from './images/denfill.jpeg'
import dc from './images/dental-crown.jpg'
import db from './images/dental-bridging.jpg'
import rct from './images/rct1.jpg'
import dbraces from './images/braces.jpg'
import aligners from './images/aligners.png'
import denture from './images/denture.jpg'
import sm from './images/smile.jpg'
import wtr from './images/wisdom-tooth-extraction.jpg'
import di from './images/dental-implant.jpg'
import zm from './images/teeth-whitening.jpg'
import kd from './images/children-dentistry.jpg'
import mu from './images/mouth-ulcers.png'
import pd from './images/preventive-dentistry.jpg'
import gd from './images/depigmantation.jpg'

function Services() {
    const [selectedImage, setSelectedImage] = useState(0)
    // const[mainData, setMainData] = useState([0])
    const mainData = [{
        id: 1,
        img: df,
        text: "Dental Fillings",
        desc: "Get dental fillings and restorations for cavities, broken or chipped teeth, or fractured filling by searching dentists near me. Dental Care offers tooth-colored fillings that match your tooth color to make them look as good as your natural tooth.",
        highcolor: "red"
    },
    {
        id: 2,
        img: dc,
        text: "Dental Crown",
        desc: "Dental Care is your best resort if you wish to have crowns that fit your aesthetic and functional needs from the nearby dentists or are looking for a dentist near me. Restore your smile by capping damaged, decayed, or RCT-treated teeth with advanced dental crowns at Dental Care."
    },
    {
        id: 3,
        img: db,
        text: "Dental Bridging",
        desc: "Replace that missing tooth with an affordable and long-lasting solution. A dental bridge connects 3 or more teeth where the existing teeth are chosen as support, and a bridge including an artificial tooth is placed over them with dental cement. Talk to our dental experts who will help you choose the right bridge for your teeth."
    },
    {
        id: 4,
        img: rct,
        text: "Root Canal Treatment",
        desc: "Save your teeth from further damage with Root Canal Treatment. Getting a gentle and painless treatment by experienced endodontists at the best dental clinic near me eliminates the possibility of tooth extraction and protects it from further damage or cavities."
    },
    {
        id: 5,
        img: dbraces,
        text: "Dental Braces",
        desc: "Align your teeth and flaunt that flawless smile with the braces. Get an ideal solution to your teeth from an expert team of orthodontists at Dental Care in your neighborhood who can suggest braces based on your dental conditions."
    },
    {
        id: 6,
        img: aligners,
        text: "Aligners",
        desc: "The most advanced, aesthetic, and precise smile transformation system is here. Get straight teeth and pleasant smiles with Aligners custom-made for your teeth and work on straightening them without any wires or metal braces."
    },
    {
        id: 7,
        img: denture,
        text: "Denture",
        desc: "Smile confidently with restorative solutions for everyone looking for affordable, convenient, and quick treatment for multiple missing teeth. Get implant-supported dentures, overdentures, fixed dentures or more from the prosthodontic dentists near me at Dental Care.",
        highcolor: "red"
    },
    {
        id: 8,
        img: sm,
        text: "Smile Makeover",
        desc: "Flaunt your perfect smile with our smile makeover treatment. We enhance the charm in your smile through veneers, lumineers, dental crowns, teeth whitening, teeth cleaning, and more. Visit our dental clinic nearby to know more about the smile designing procedures through experts in aesthetic dentistry."
    },

    {
        id: 9,
        img: wtr,
        text: "Wisdom Tooth Removal",
        desc: "Third molars, commonly known as wisdom teeth, may erupt in later stages of life or lie dormant inside the bone. Sometimes, bone cysts accompany poorly aligned wisdom teeth, causing swelling, becoming a problem for many adults."
    },
    {
        id: 10,
        img: di,
        text: "Dental Implant",
        desc: "Gain your confidence and smile widely by replacing the missing tooth with dental implants. Implants effectively restore the form and the function of the tooth while blending naturally with the rest of the teeth. An Implantologist at Dental Care assesses your jawbones to place an implant with the crown that matches the color of your teeth."
    },
    {
        id: 11,
        img: zm,
        text: "Zoom Whitening",
        desc: "Let those pearly whites shine bright with the Zoom teeth whitening at Dental Care. Using the latest technology and combining the expertise of cosmetic dentists, we offer teeth whitening treatment for yellow or discolored teeth, externally stained teeth, dull teeth, etc. It is a single-sitting procedure that is reliable, effective, and long-lasting."
    },
    {
        id: 12,
        img: kd,
        text: "Kids Dentistry",
        desc: "Bring your little one to us and see their fear turning into a smile with the fun and interactive treatment through our expert team of pedodontists at Dental Care. Let your query of best dentists near me end with trained child specialists who and treat early childhood caries, cavities, early loss of teeth, or missing teeth."
    },
    {
        id: 13,
        img: mu,
        text: "Mouth Ulcers",
        desc: "Ulcers or canker sores can be irritating. Get them treated right with the dentists near me at Dental Care. Our team will analyze the ulcer, check for related symptoms, and provide suitable topical gel, medications, mouthwashes, or gum paints for quick and effective treatment for mouth ulcers.",
        highcolor: "red"
    },
    {
        id: 14,
        img: pd,
        text: "Preventive Dentistry",
        desc: "Identify and eliminate the dental diseases before they progress with preventive dentistry through experts at Dental Care. Talk to our dentists to know how to prevent dental cavities, gum infections, tooth loss, and more before they damage the oral health beyond repair.",
        highcolor: "red"
    },
    {
        id: 15,
        img: gd,
        text: "Gum Depigmentation",
        desc: "Get a radiant smile with painless, aesthetic, and quick treatment for dark gums through laser gum depigmentation treatment at Dental Care clinic near me. It removes the dark melanin layer from the gums to leave pink and brighter gums that enhance the smile."
    }


    ]
    // const [allimages, setAllImages] = useState([df, dc, db, rct, dbraces, aligners, denture, sm, wtr, di, zm, kd, mu, pd, gd])


    // const [selectedTitle, setSelectedTitle] = useState(0)

    // const[title, setTitle] = useState(['Dental Fillings', 'Dental Crown', 'Dental Bridges', 'RCT', 'Dental Braces', 'Aligners', 'Denture', 'Smile Makeover', 'Wisdom Tooth Removal', 'Dental Implant', 'Zoom Whitening', 'Kids Dentistry', 'Mouth Ulcers', 'Preventive Dentistry', 'Gum Depigmentation'])

    useEffect(() => {
        const interval = setInterval(() => {


            setSelectedImage(selectedImage => selectedImage < 14 ? selectedImage + 1 : 0)
            console.log("number", setSelectedImage)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // const nishacolor = `${mainData[selectedImage].highcolor}`



    // const [selectedTitle, setSelectedTitle] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => {


    //         setSelectedTitle(selectedTitle => selectedTitle < 14 ? selectedTitle + 1 : 0)

    //     }, 3000)
    //     return () => clearInterval(interval)
    // }, [])

    // const[nishaColor, setNishaColor] = useState('purple')
    // const titleColorStyle = {backgroundColor: `${mainData[selectedImage] ? 'red' : 'purple'}` }






    return (
        <div className='ser'>
            <div className="vic">
                <p id='feat'>Featured</p>
                <p id='dent'>Dental Services</p>
            </div>
            <div className="list">
                < div className="listit">

                    {mainData.map((element) => {
                        return <div className="second" key={element.id}>
                            {element.text}
                        </div>

                    })}



                </div>
            </div>


            <div className="parrot">
                < div className="nisha"><img src={mainData[selectedImage].img} alt="" style={{ width: '23vw', height: '50vh', border: '5px solid black', borderRadius: '50%' }} />
                    <div className="write">
                        <p id='name'>{mainData[selectedImage].text}</p>
                        <p id='para' style={{ marginTop: '1vh', fontWeight: '400', fontSize: '20px' }}>

                            {mainData[selectedImage].desc}
                        </p>
                    </div>

                </div>

            </div>


        </div>












    )
}

export default Services
