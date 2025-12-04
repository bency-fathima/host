import React from 'react'
import Heading from '../shared/Heading'
import { blogsdata } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

export default function OurBlogs() {
  const navigate=useNavigate()
  return (
    <div className='my-30 mx-4 md:mx-20 lg:mx-38 justify-center content-center'>
      <div className='text-center my-10'>
            <Heading heading={"Our Blogs"} />
            <p>Insights to guide your health journey.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-10'>
        {blogsdata.map((blog,index)=>(
            <div key={index} className='flex flex-col justify-center md:justify-between gap-3'>
                <img src={blog.img} alt="" />
                <p className='text-sm text-[#1E1E1E]'>{blog.date}</p>
                <p className='text-sm font-bold text-[#1E1E1E]'>{blog.heading}</p>
                <p onClick={()=>navigate(`/blog/${blog.id}`)} className='underline text-[#0A4F48] text-md cursor-pointer'>Read more</p>

            </div>
        ))}

      </div>
    </div>
  )
}
