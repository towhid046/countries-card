/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import Post from './../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        const loadData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setPosts(data)
        } 
        loadData()
    }, [])
    return(
        <>
        <h1 className="post_con_header">Task : 03</h1>
        <div className="posts_container">
            {
            posts.map(post => <Post post={post}/>)
            }
        </div>
        </>
    )
}

export default Posts