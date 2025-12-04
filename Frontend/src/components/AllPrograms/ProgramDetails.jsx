import React from 'react'
import { useParams } from 'react-router-dom'
import { designData } from '../../utils/constants'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const ProgramDetails = () => {
    const { id } = useParams()
    const programs = designData.find(p => p.id === parseInt(id))
    return (
        <div className='flex flex-col mx-5  md:mx-50 my-18'>
            <div className='  items-center justify-center py-10 md:py-30 '>
                <img src={programs.bigimg} alt="program-images" className='aspect-4/3 rounded-3xl ' />
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl font-bold'>Weight Loss</h1>
                    <p className='text-md '>A personalised weight-loss program built around your lifestyle, medical needs,
                        and fitness level designed to help you lose weight safely, steadily, and sustainably. </p>
                    <h1 className='text-2xl font-bold'>What You Get</h1>
                    <p>Custom diet plans based on your lifestyle</p><hr className='border-gray-400'></hr>
                    <p>Daily check-ins & weekly progress reviews</p><hr className='border-gray-400'></hr>
                    <p>Home-friendly workout routines</p><hr className='border-gray-400'></hr>
                    <p>Mindset & habit-building support</p><hr className='border-gray-400'></hr>
                </div>
                <div className='w-full py-2 md:py-2'>
                    <div className='flex flex-col gap-7 w-full bg-[#0A4F48] rounded-3xl py-5 md:py-10 items-center md:items-start md:px-15 text-white'>
                        <p className='text-2xl md:text-4xl font-bold'> Choose <span className='md:flex flex-col'>Your Duration</span></p>
                        <div className='flex flex-row  gap-6 text-xs md:text-[18px]  justify-betwee'>
                            <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>30 Days</button>
                            <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>60 Days</button>
                            <button className='rounded-2xl border py-2 px-2  bg-[#10635b]'>90 Days</button>

                        </div>
                        <div>
                            <button className='border rounded-3xl text-l p-2 bg-white text-[#0A4F48] my-5 py-1 md:py-4 px-8 font-bold'>Start Your Journey</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProgramDetails