import React from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg1.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

const PostShare = () => {
    const [image,setImage] = useState(null)
    const imageRef = useRef()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const onImageChange = (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage(img);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id
        }
    }

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder='What is happening' />
                <div className="postOptions">
                    <div className="option" style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()} >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color: "var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color: "var(--location)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{color: "var(--schedule)"}}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-button">Share</button>
                    <div style={{display:"none"}} onChange={onImageChange}>
                        <input type="file" name='myImage' ref={imageRef} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>

        </div>
    )
}

export default PostShare