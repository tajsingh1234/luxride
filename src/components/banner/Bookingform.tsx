import React from 'react';
import { CiMail ,CiCalendarDate } from "react-icons/ci";
import { HiArrowUturnRight } from "react-icons/hi2";

import './banner.css'
const Bookingform = () => {
    return (
        <div className='Bookingform bg-white rounded-[30px] px-4 py-7'>
            <form action="" className='flex md:flex-row flex-col  gap-5 justify-between'>
                <div className='Mailid flex gap-4 items-center'>
                    <div className='icon rounded-full bg-[#F6F6F6] w-[50px] h-[50px] flex items-center justify-center'>
                        <CiMail className='text-[#626262]' />
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Mailid</p>
                        <input type="email" placeholder='example@gmail.com' className='focus:outline-none w-full border-none bg-white' />
                    </div>
                </div>
                <div className='Mailid flex gap-4 items-center'>
                    <div className='icon rounded-full bg-[#F6F6F6] w-[50px] h-[50px] flex items-center justify-center'>
                        <CiCalendarDate className='text-[#626262]' />
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Date</p>
                        <input type="date"  className='w-full text-[#626262] focus:outline-none border-none bg-white' />
                    </div>
                </div>
                <div className='Mailid flex gap-4 items-center'>
                    <div className='icon rounded-full bg-[#F6F6F6] w-[50px] h-[50px] flex items-center justify-center'>
                        <HiArrowUturnRight className='text-[#626262]' />
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Pickup Location</p>
                        <input type="email" placeholder='London City Airport' className= 'focus:outline-none w-full border-none bg-white' />
                    </div>
                </div>
                <div className='Mailid flex gap-4 items-center'>
                    <div className='icon rounded-full bg-[#F6F6F6] w-[50px] h-[50px] flex items-center justify-center'>
                        <HiArrowUturnRight className='text-[#626262] rotate-180	' />
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Drop Location</p>
                        <input type="email" placeholder='London City Blackheath' className='focus:outline-none w-full border-none bg-white' />
                    </div>
                </div>
                <button className='button bg-dark text-white rounded-full'> Submit</button>
            </form>
        </div>
    );
}

export default Bookingform;
