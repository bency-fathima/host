import React from 'react'
import Heading from '../shared/Heading'
import imag from "../../assets/images/Rectangle2.svg"

export default function ContactForm() {
    return (
        <div className=''>
            <div>
                <div>
                    <Heading heading={"Get in Touch"} description={"We’d love to hear from you."} />
                </div>
                <form action="" className='bg-green900 mx-2 sm:mx-10 md:mx-20'>
                    <div className='bg-amber900 flex flex-col gap-5 md:gap-5 p-10 '>
                        <div className='flex gap-5 md:gap-10 flex-col md:flex-row'>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="">First name*</label>
                                <input className='w-full rounded-xl p-2 border border-black/20' type="text" placeholder='Enter your First name' />
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="">Last Name</label>
                                <input className='w-full rounded-xl p-2 border border-black/20' type="text" placeholder='Enter your Last name' />
                            </div>

                        </div>
                        <div className='flex gap-5 md:gap-10 flex-col md:flex-row '>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="">Email</label>
                                <input className='w-full rounded-xl p-2 border border-black/20' type="text" placeholder='Enetr your email ID' />
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="">Phone Numner</label>
                                <input className='w-full rounded-xl p-2 border border-black/20' type="number" placeholder='Enter your phone number' />
                            </div>

                        </div>

                        <div className='flex gap-5 md:gap-10 flex-col md:flex-row '>
                            <div className='flex flex-col w-full md:w-1/2'>

                                <label htmlFor="">Gender</label>
                                <select className='w-full border border-black/20 p-2 rounded-xl' name="Gender" id="">
                                    <option value="">Select your gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Trans</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="">City</label>
                                <select className='w-full border border-black/20 p-2 rounded-xl ' name="city" id="">
                                    <option value="">Select City</option>
                                    <option value="">city 2</option>
                                    <option value="">city 3</option>
                                    <option value="">city 5</option>
                                    <option value="">city 6</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Address</label>
                            <input className='w-full rounded-xl p-2 border border-black/20' type="text" placeholder='Enter your address' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="">Message</label>
                            <textarea className='w-full rounded-xl p-2 border border-black/20' rows={8} type="text" placeholder='Enter your message' />

                        </div>
                        <div className='w-full'>
                            <button className='bg-[#0A4F48] text-white text-sm cursor-pointer rounded-full px-10 py-3' type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
