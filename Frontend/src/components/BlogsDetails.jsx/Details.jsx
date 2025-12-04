import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogsdata } from '../../utils/constants'
import BlogDetails from '../../pages/BlogDetails'
import fb from "../../assets/Icons/facebookicon.svg"
import Insta from "../../assets/Icons/instagramicon.svg"
import X from "../../assets/Icons/xicon.svg"
import linkedin from "../../assets/Icons/linkedinicon.svg"
import group from "../../assets/Icons/groupicon.svg"
import share from "../../assets/Icons/shareIcon.svg"


function Details() {
    const { bid } = useParams()



    const BlogDetails = blogsdata.find(blog => blog.id === parseInt(bid))

    return (
        <div className='my-40 mx-4 md:mx-20 lg:mx-38'>
            <div className='flex flex-col gap-10'>
                <div>
                    <p className='text-5xl font-bold'>{BlogDetails.heading}</p>
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row justify-between'>
                            <p className='text-[#1E1E1E]'>Published on {BlogDetails.date}</p>
                            <div className='items-center'>
                                <div className='cursor-pointer border border-gray-500 rounded-full'>
                                    <img className='block md:hidden mx-2 h-5 w-5 my-2' src={share} alt="" />
                                </div>
                            </div>
                            <div className=' flex-row items-center gap-4 hidden md:flex'>
                                <p className='text-[#000000B2]'>Share</p>
                                <div className='flex flex-row gap-3 '>
                                    <div className='cursor-pointer border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={fb} alt="" />
                                    </div>
                                    <div className='cursor-pointer border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={X} alt="" />
                                    </div>
                                    <div className='cursor-pointer border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={Insta} alt="" />
                                    </div>
                                    <div className='cursor-pointer border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={linkedin} alt="" />
                                    </div>
                                    <div className='cursor-pointer border border-gray-500 rounded-full '>
                                        <img className='mx-2 h-3 w-3 my-2' src={group} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className='w-full rounded-xl' src={BlogDetails.img} alt="" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <p className='text-sm'>{BlogDetails.discription}</p>
                        <div className='flex flex-col gap-10'>
                            {BlogDetails.details.map((detail, index) => (
                                <div className=' flex flex-col ' key={index}>
                                    <div className=' flex flex-col gap-3'>
                                        <p className='font-bold text-xl'>{index + 1}.{detail.heading}</p>
                                        <p className='text-sm'>{detail.discription}</p>
                                    </div>
                                    <div className='text-sm mx-2'>
                                        {detail.dis_point?.map((points, i) => (
                                            <div key={i}>
                                                <p>{points.point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Details
