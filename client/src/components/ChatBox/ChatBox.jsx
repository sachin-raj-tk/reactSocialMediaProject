import React, { useState } from 'react'
import { useEffect } from 'react'
import { getUser } from '../../api/UserRequest'
import './ChatBox.css'

const ChatBox = ({ chat, currentUser }) => {
    const [userData, setUserData] = useState(null)
    const [messages,setMessages] = useState([])

    // fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }

        }
        if (chat !== null) getUserData()

    }, [chat, currentUser])

    //fetching data for messages
    useEffect(()=>{
        const fetchMessages = async () => {
            try {
                //const {data} = await getMessages
            } catch (error) {
                
            }
        }
    })

    return (
        <>
            <div className="ChatBox-container">
                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>
                                
                                <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfileImg.jpg'} alt="" className='followerImage' style={{ width: '50px', height: '50px' }} />
                                <div className="name" style={{ fontSize: "0.8rem" }}>
                                    <span>{userData?.firstname} {userData?.lastname}</span>
                                    
                                </div>
                            </div>
                        </div>
                        <hr style={{width:'85%', border:'0.1px solid #ececec'}}/>
                    </div>
                    {/* chatbox messages */}
                    <div className="chat-body">

                    </div>
                </>
            </div>
        </>
    )
}

export default ChatBox