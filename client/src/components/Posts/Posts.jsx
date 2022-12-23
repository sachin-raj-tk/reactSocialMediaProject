import React from 'react'
import { useEffect } from 'react'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import{useSelector,useDispatch} from 'react-redux'
import './Posts.css'

const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)
//   const {posts,loading} = useSelector((state)=>state.postReducer)
//   useEffect(()=>{
//     dispatch(getTimelinePosts(user._id))
//   },[])
  return (
     <div className="Posts">
        {
            PostsData.map((post,id)=>{
                return <Post data={post} id={id}/>
            })
        }
     </div>
    )
}

export default Posts