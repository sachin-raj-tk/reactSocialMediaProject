import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)
  return (
     <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
              <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />
            </div>
            <ProfileModal modalOpened = {modalOpened} setModalOpened={setModalOpened}/>

        </div>

        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span> in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span> Calicut</span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span> Brototype</span>
        </div>
        <button className="button logout-button">Logout</button>
     </div>
    )
}

export default InfoCard