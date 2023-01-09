import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createChats, userChats } from '../../api/ChatRequest'
import Conversation from '../../components/Conversation/Conversation'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import './Chat.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import ChatBox from '../../components/ChatBox/ChatBox'
import {io} from 'socket.io-client'

const Chat = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    console.log(user)
    const [chats, setChats] = useState([])
    const [newUser,setNewUser] = useState(null)
    const [currentChat,setCurrentChat] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([])
    const [sendMessage,setSendMessage] = useState(null)
    const [receiveMessage,setReceiveMessage] = useState(null)
    const socket = useRef()
    
    console.log(newUser,'chat.jsx newuser')

    //send message to socket server
    useEffect(() => {
       if(sendMessage !== null){
        socket.current.emit('send-message', sendMessage)
       }
    },[sendMessage])
    
    

   

    useEffect(() => {
      socket.current = io('http://localhost:8800')
      socket.current.emit("new-user-add", user._id)
      socket.current.on('get-users',(users)=>{
        setOnlineUsers(users);
        
      })
    },[user])

    useEffect(()=>{
        const createCht=async()=>{
        if(newUser !== null){
          await createChats(user._id,newUser._id)
          
        }
        }
        createCht()
    },[newUser])

    // receive message from socket server
    useEffect(()=>{
        socket.current.on("receive-message",(data)=>{
            setReceiveMessage(data)
            console.log(receiveMessage,'receive message chat.jsx');
        })
    },[])

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    }, [user])

    
    const checkOnlineStatus = (chat) => {
        console.log(chat,"chat.jsx chekconline status")
        const chatMember = chat.members.find((member)=> member !== user._id)
        console.log(chatMember,'again');
        console.log(user._id,'then again')
        console.log(onlineUsers,'again and agian');
        const online = onlineUsers.find((user)=>user.userId === chatMember)
        console.log(online, 'true or false')
        return online ? true: false
    }
    

    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
                <LogoSearch setNewUser={setNewUser}/>
                <div className="Chat-container">

                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div onClick={()=>setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="Right-side-chat">
                <div style={{width:'20rem',alignSelf:'flex-end'}}>
                    <div className="navIcons">
                        <Link to='../home'>
                            <img src={Home} alt="" />
                        </Link>
                        <UilSetting />
                        <img src={Noti} alt="" />
                        <Link to="../chat">
                            <img src={Comment} alt="" />
                        </Link>
                    </div>


                </div>
                    {/* chat body */}
                    <ChatBox chat = {currentChat} currentUser = {user._id} setSendMessage={setSendMessage} receiveMessage={receiveMessage}/>
            </div>
        </div>
    )
}

export default Chat