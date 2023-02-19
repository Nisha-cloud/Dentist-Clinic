import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    < div className='cardi'>
        <div className="des">
        <p className='content'>{props.desc}</p>
        </div>
        <div className="wap">
        <p className='pname'>{props.name}</p>
        </div>
        
    </div>
  )
}

export default Card
