import React from 'react'
import './scheduledCardStyle.scss'

const ScheduledCard = ({color,icon,title,amount}) => {
  return (
    <div className='scheduled-card-container '  style={{backgroundColor:color}}>
        <p>{amount}</p>

        <div className="brand">
            <img src={icon} alt="playstation" />
            <span>{title}</span>
        </div>
    </div>
  )
}

export default ScheduledCard