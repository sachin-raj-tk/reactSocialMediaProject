import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import '../profileSide/ProfileSid.css'

const ProfileLeft = () => {
  
  return (
   <div className="ProfileSid">
    <LogoSearch/>
    <InfoCard/>
    <FollowersCard locality="ProfileSid"/>
   </div>
    )
}

export default ProfileLeft