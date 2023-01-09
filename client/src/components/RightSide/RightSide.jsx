import React, { useState } from 'react'
import './RightSide.css'
import { Link } from 'react-router-dom'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import FollowersCard from '../FollowersCard/FollowersCard'
import { useDispatch } from 'react-redux'
import { logOut } from '../../actions/AuthAction'
const RightSide = () => {
  const dispatch = useDispatch()
  const [modalOpened, setModalOpened] = useState(false)
  const handleLogOut =() =>{
    dispatch(logOut())
}
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to='../home'>
          <img src={Home} alt="" />
        </Link>
        {/* <UilSetting /> */}
        <img src={Noti} alt="" />
        <Link to="../chat">
          <img src={Comment} alt="" />
        </Link>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={handleLogOut}>
      Logout
      </button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
      <FollowersCard locality="hello" />
    </div>
  )
}

export default RightSide