import React from 'react'
import './Post.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import like from '../../img/like.png'
import notlike from '../../img/notlike.png'
import deletButton from '../../img/deleteButton.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getTimelinePosts, likePost } from '../../api/PostRequest'
import InputEmoji from 'react-input-emoji'
import { addComment } from '../../actions/postAction'
import PostDeleteModal from '../PostDeleteModal/PostDeleteModal.jsx'



const Post = ({data}) => {
   
   const dispatch = useDispatch()
   const {user} = useSelector((state)=>state.authReducer.authData)
   const [liked,setLiked] = useState(data.likes.includes(user._id))
   const [likes,setLikes] = useState(data.likes.length)
   const [modalOpen,setModalOpen] = useState(false)
   const[open,setOpen] = useState(false)
   const [commentString,setCommentString] = useState("")
   
   const handleLike=()=>{
      setLiked((prev)=>!prev)
      likePost(data._id,user._id)
      // setLikes(data.likes.length)
      liked? setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
   }
   const handleCommentBox=()=>{
      setOpen((prev)=>!prev)
   }
   
   const handleCommentChange =(commentString) =>{
      setCommentString(commentString)
      
   }
    
   const handleSubmit = async(e) =>{
      e.preventDefault();
      const comment = {
         comment : commentString,
         commentedUser: user.firstname+' '+ user.lastname,
         time:Date()
      }
      
      dispatch(addComment(data._id,comment))
      setOpen(false)
      
   }
  return (
   <div className="Post">
     <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
     <div className="postReact">
        <img src={liked?like:notlike} alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
        <img src={comment} onClick={handleCommentBox} alt="" />
        <img src={share} alt="" />
        {data.userId === user._id &&
        <>
        <img src={deletButton} onClick={()=>setModalOpen((prev)=>!prev)}style={{width:"28px", height:"28px",display:"flex", alignSelf:'flex-end'}} alt=""/>
          <PostDeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} id={data._id} currentUser={user._id}/>
          </> 
         }
     </div>
     <span style={{color: "var(--gray)", fontSize:'12px'}}>{likes} likes</span>
     <div className="detail">
        <span><b>{data.name}</b> </span>
        <span>{data.desc}</span>
     </div>
     
     {open &&
      data.comments?.map((com)=>{
         
         return (
            <div>
        <span><b>{com.commentedUser}</b></span>
        <span> {com.comment}</span>
     </div>
         )
      })
     }
     
     {open &&
     <div className='addComment' >
        {/* <span><b>username</b></span> */}
        <InputEmoji className="InpEmo" value={commentString}  onChange={handleCommentChange} />
        <button  className="button commentBtn" onClick={handleSubmit}>Post</button>
     </div>
     }
   </div>
   
    )
}

export default Post