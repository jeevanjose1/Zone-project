import React from 'react'
import ScheduledCard from './scheduledPaymentComponents/scheduledCard'
import './scheduledPaymentsStyle.scss'

import playstation  from '../../../assets/images/playstation.svg'
import discord  from '../../../assets/images/discord.svg'
import wattpad  from '../../../assets/images/wattpad.svg'


const ScheduledPayments = () => {
  return (
    <div className='scheduled-payment-container'>

        <div className="scheduled-payment">
            <div className="head">
                <h3>
                    Scheduled payments
                </h3>
            </div>

            <div className="content">

                {/* scheduled payment card components */}
                
                <ScheduledCard color='#ef4464' icon={playstation} title="Playstation" amount='$13.99/m'  />
                <ScheduledCard color='#47bec4' icon={discord} title="Discord" amount='$1.99/m' />
                <ScheduledCard color ='#1d1a21' icon={wattpad} title="Wattpad" amount='$10.99/m' />
              
             
            </div>
        </div>
        
    </div>
  )
}

export default ScheduledPayments