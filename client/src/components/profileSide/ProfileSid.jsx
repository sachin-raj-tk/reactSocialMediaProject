import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSid.css'

const ProfileSid = () => {
  return (
    <div className="ProfileSid">
        <LogoSearch/>
        <ProfileCard location="homepage"/>
        <FollowersCard/>
    </div>
    )
}

export default ProfileSid