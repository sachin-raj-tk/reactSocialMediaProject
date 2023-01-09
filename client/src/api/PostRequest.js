import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`)

export const likePost = (id,userId) => API.put(`post/${id}/like`,{userId: userId})

export const addComment = (id,comment) => API.put(`/post/${id}/comment`,comment)

export const deleteComment =(id,commentId) => API.post(`/post/${id}/deleteComment`,{commentId:commentId})

export const deletePost = (id,currentUser) => API.post(`/post/${id}/delete`,{currentUser:currentUser})