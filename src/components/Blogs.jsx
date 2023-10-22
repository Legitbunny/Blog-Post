import React from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner'
import { useContext } from 'react';
import "./Blogs.css"

const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[630px] py-10  flex flex-col gap-y-7 mt-[55px] mb-[70px] justify-center items-center h-screen'>
    {
        loading ? (<Spinner/>) : 
        (
            posts.length === 0 ? 
            (<div>
                <p>No Blogs Found</p>
            </div>) : 
            (posts.map((post) => (
                <div key = {post.id}>
                    <p className='font-bold text-md'>{post.title}</p>
                    <p className='text-[12px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                    <p className='text-[13px]'>Posted on {post.date}</p>
                    <p className='text-[15px] mt-[10px]'>{post.content}</p>
                    <div className='flex gap-x-2'>
                        {post.tags.map((tag, index) => {
                            return <span key = {index} className='text-blue-500 underline font-bold text-[11px]'>{` #${tag}`}</span>
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