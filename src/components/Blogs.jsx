import React from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner'
import { useContext } from 'react';
import "../index.css"
// import "./Blogs.css"

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
                <div key = {post.id}>
                    <p className='font-bold text-md text-[--font-color]'>{post.title}</p>
                    <p className='text-[12px] text-[--font-color]'>By <span className='italic text-[--font-color]'>{post.author}</span> on <span className='underline font-bold text-[--font-color]'>{post.category}</span></p>
                    <p className='text-[13px] text-[--font-color]'>Posted on {post.date}</p>
                    <p className='text-[15px] mt-[10px] text-[--font-color]'>{post.content}</p>
                    <div className='flex gap-x-2'>
                        {post.tags.map((tag, index) => {
                            return <span key = {index} className=' underline font-bold text-[11px] text-[--link-color]'>{` #${tag}`}</span>
                        })}
                    </div>
                </div>
                
            )))
        )
    }

    </div>
  )
}

export default Blogs