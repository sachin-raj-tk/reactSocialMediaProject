import React from 'react'
import './Post.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import like from '../../img/like.png'
import notlike from '../../img/notlike.png'

const Post = ({data}) => {
  return (
   <div className="Post">
     <img src={data.img} alt="" />
     <div className="postReact">
        <img src={data.liked?like:notlike} alt="" />
        <img src={comment} alt="" />
        <img src={share} alt="" />
     </div>
     <span style={{color: "var(--gray)", fontSize:'12px'}}>{data.likes} likes</span>
     <div className="detail">
        <span><b>{data.name}</b> </span>
        <span>{data.desc}</span>
     </div>
   </div>
   
    )
}

export default Post