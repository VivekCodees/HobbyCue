import Image from 'next/image';
import React from 'react';
import Quote from '../../../public/Quote.svg';
import Track from '../../../public/Track.svg';
import Profile from '../../../public/Profile.svg';

const Testimonials = () => {
    return (
        <div className='px-[7vw] py-[100px]'>
            {/* Testimonial container */}
            <div className="lg:p-10 p-5 bg-[#F7F5F9] w-full rounded-lg">
                {/* Testimonial header */}
                <div className='flex items-center pt-6 gap-3 lg:gap-6'>
                    <Image src={Quote} alt='Quote Icon' className='lg:w-10 w-6'/>
                    <div className='font-semibold text-[16px] lg:text-[24px]'>Testimonials</div>
                </div>
                {/* Testimonial content */}
                <div className='font-light lg:text-[18px] lg:text-start text-[10px] text-center  lg:leading-[30px] text-[#6D747A] tracking-wide lg:tracking-wider my-4 lg:my-8'>
                    {/* Testimonial text */}
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </div>
                {/* Testimonial footer */}
                <div className='flex flex-wrap justify-between gap-8'>
                    {/* Testimonial image */}
                    <Image src={Track} alt='Track' className='sm:order-1 order-2' />
                    {/* Testimonial profile */}
                    <div className='flex items-center lg:gap-6 gap-3 sm:order-2 order-1 '>
                        {/* Testimonial profile image */}
                        <Image src={Profile} alt='Profile Photo' className='lg:w-[80px] w-[56px]' />
                        <div>
                            {/* Testimonial profile details */}
                            <div className='font-semibold text-[14px] tracking-wide lg:text-[18px] lg:tracking-wider text-[#8064A2]'>Shubha Nagarajan</div>
                            <div className='text-[12px] lg:text-[14px] lg:tracking-wider text-[#0096C8] mt-1'>Classical Dancer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;