import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
import { getUser } from '../../actions/userAction'
const Profile = () => {

    const {user} = useSelector((state)=>state.authReducer.authData)
    const person = useSelector((state)=>state.userReducer.userData)
    console.log(user,'profilecard.jsx')
    // const [person,setPerson] = useState({})
    // const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    // useEffect(()=>{
    //     if(id === user._id){
    //         setPerson(user)
    //     }else{
    //         console.log(id);
    //         // dispatch(getUser(id))
    //         setPerson(profileUser)
    //     }
        
    // },[])
    // console.log(profileUser,'profilecard.jsx 1')
    console.log(person,'profilecard.jsx 2');

  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location="profilePage" person = {id===user._id?user:person}/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
    )
}

export default Profile