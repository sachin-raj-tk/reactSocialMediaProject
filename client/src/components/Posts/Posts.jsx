import React from 'react'
import { useEffect } from 'react'
import Post from '../Post/Post'
import{useSelector,useDispatch} from 'react-redux'
import './Posts.css'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)
  
  const {posts,loading} = useSelector((state)=>state.postReducer)
  const postReducer = useSelector((state)=>state.postReducer)
  
  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))

  },[])
  return (
     <div className="Posts">
        {loading?"Fetching posts...":
            posts.map((post,id)=>{
                return <Post data={post} id={id}/>
            })
            
            
        }
     </div>
    )
}

export default Posts