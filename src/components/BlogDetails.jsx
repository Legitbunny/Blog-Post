import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    
  return (
    <div className='mt-[50px]'>
        <div>
        <NavLink to={`/blog/${post.id}`} >
            <span>{post.title}</span>
        </NavLink>
        <p>
            By <span>{post.author}</span> on {" "} 
            <NavLink to = {`/categories/${post.category.replaceAll(" ", "_")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>
            Posted on {post.date}
            <p>{post.content}</p>
            <div>
                {post.tag.map((tag, index) => 
                (
                    <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}>
                        <span>{`#{tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </p>
        </div>
    </div>
  )
}

export default BlogDetails