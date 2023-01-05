import React from 'react'
import './FollowersCard.css'
import {Followers} from '../../Data/FollowersData'
import User from '../User/User'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequest'
const FollowersCard = ({locality}) => {
  const[persons, setPersons] = useState([])
  const {user} = useSelector((state)=>state.authReducer.authData)
  
  
  
  useEffect(()=>{
    const fetchPersons = async()=>{
      const {data} = await getAllUser();
      setPersons(data)
      
    }
    fetchPersons()
  },[])
  return (
    <>
    {locality === "ProfileSid"?
    (
    <div className="FollowersCard">
        <h3>People you may know</h3>
        {persons.map((person,id)=>{
          if(person._id !== user._id && !user.following.includes(person._id) && !user.followers.includes(person._id)){
          return(
            <User person = {person} key={id}/>
          )
        }
        })}
    </div>
    )
  :
  (   
    <div className="FollowersCard">
      
        <h3>Following</h3>
        {persons.map((person,id)=>{
          if(user.following.includes(person._id)){
          return(
            <User person = {person} key={id}/>
          )
        }
        })}
        

        <h3>Followers</h3>
        {persons.map((person,id)=>{
          if(user.followers.includes(person._id)){
          return(
            <User person = {person} key={id}/>
          )
        }
        })}

    </div>
    )
  }
  </>
  )
}

export default FollowersCard