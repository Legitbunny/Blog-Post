import React from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner'
import { useContext } from 'react';
import "../index.css"
// import "./Blogs.css"
import BlogDetails from './BlogDetails';

const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[630px]  py-20  flex flex-col gap-y-7 mt-[95px] mb-[90px] justify-center items-center h-screen Font'>
    {
        loading ? (<Spinner/>) : 
        (
            posts.length === 0 ? 
            (<div>
                <p className='Font'>No Blogs Found</p>
            </div>) : 
            (posts.map((post) => (
                <BlogDetails key = {post.id} post={post}/>
                
            )))
        )
    }

    </div>
  )
}

export default Blogs