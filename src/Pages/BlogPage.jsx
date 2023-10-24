import BlogDetails from '../components/BlogDetails'
import React, { useContext } from 'react'
import { useState,useNavigate, useLocation, useEffect } from 'react'
import { AppContext } from 'react'
import { baseUrl } from '../baseUrl'
import Header from '../components/Header'

const BlogPage = () => {

    const[blog, setBlog] = useState(null)
    const[relatedBlogs, setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigate()
    const {setLoading, loading} = useContext(AppContext)

    const blogId = location.pathname.split('/').at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true)
        let url = `${baseUrl}?blogId=${blogId}`
        try{
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(err){
            console.log(err)
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false)
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs()
        }
    }, [location.pathname])

  return (
    <div>
         <Header/>
         <div>
            <button onClick={() => navigation(-1)}>
                Back
            </button>
         </div>
         {
            loading ?
            (<div>
                <p>Loading...</p>
            </div>) : (
                blog ? (<div>
                    <BlogDetails post = {blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map ((post) => (
                            <div key = {post.id}>
                                <BlogDetails post = {post}/>
                            </div>
                        ))
                    }
                </div>) :
                (<div>
                    <p>No Blog found</p>
                </div>)
            )
         }
    </div>
  )
}

export default BlogPage