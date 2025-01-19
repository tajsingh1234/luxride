import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
import './footer.css'

const Footer = () => {
    return (
        <div className='footer bg-dark px-4  pt-14 pb-8'>
            <div className='container'>
                <div className='footer-icon flex md:flex-row gap-10 flex-col justify-center items-center md:justify-between pb-6 border-b border-gary'>
                    <img src="/images/logo-white.svg" className='w-[200px]' alt="" />
                    <div className='icons flex gap-6 items-center text-white'>
                        <p className='body-text'><b>Follow Us</b></p>
                        <div className='icons-main flex gap-4 text-white'>
                            <FaFacebookF />
                            <FaInstagram />
                            <TiSocialSkype />
                        </div>
                    </div>
                </div>
                <div className='footer-links border-b  border-gary py-14'>
                    <div className='grid text-white gap-10 md:grid-cols-6'>
                        <div className='Company '>
                            <h4 className='mb-6'>Company</h4>
                            <a href="" className='mb-3 block'>About us</a>
                            <a href="" className='mb-3 block'>Our offerings</a>
                            <a href="" className='mb-3 block'>Newsroom</a>
                            <a href="" className='mb-3 block'>Investors</a>
                            <a href="" className='mb-3 block'>Blog</a>
                            <a href="" className='mb-3 block'>Careers</a>
                        </div>
                        <div className='Top-cities px-2'>
                            <h4 className='mb-6'>Top cities</h4>
                            <a href="" className='mb-3 block'>New York</a>
                            <a href="" className='mb-3 block'>London</a>
                            <a href="" className='mb-3 block'>Berlin</a>
                            <a href="" className='mb-3 block'>Los Angeles</a>
                        </div>
                        <div className='Explore px-2'>
                            <h4 className='mb-6'>Explore</h4>
                            <a href="" className='mb-3 block'>Intercity rides</a>
                            <a href="" className='mb-3 block'>Limousine service </a>
                            <a href="" className='mb-3 block'>Chauffeur service</a>
                            <a href="" className='mb-3 block'>Private car service</a>
                            <a href="" className='mb-3 block'>Ground transportation</a>
                            <a href="" className='mb-3 block'>Airport transfer</a>
                        </div>
                        <div className='Classes px-2'>
                            <h4 className='mb-6'>Classes</h4>
                            <a href="" className='mb-3 block'>Business</a>
                            <a href="" className='mb-3 block'>First</a>
                            <a href="" className='mb-3 block'>XL</a>
                            <a href="" className='mb-3 block'>Assistant</a>
                        </div>
                        <div className='Recent-Posts col-span-2'>
                            <h4 className='mb-6'>Recent Posts</h4>
                            <div className='footer-post flex gap-4 items-center'>
                                <div className=''>
                                    <img src="/images/news1.jpg" className='w-[90px]' alt="" />
                                </div>
                                <div className='flex-1'>
                                    <p className='body-text-small'>April 18, 2024</p>
                                    <p className='body-text'>Escaping London for a relaxing long weekend</p>
                                </div>
                            </div>
                            <div className='footer-post my-4 flex gap-4 items-center'>
                                <div className=''>
                                    <img src="/images/news1.jpg" className='w-[90px]' alt="" />
                                </div>
                                <div className='flex-1'>
                                    <p className='body-text-small'>April 18, 2024</p>
                                    <p className='body-text'>Escaping London for a relaxing long weekend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex text-white pt-8 justify-between'>
                    <a href="" className='mb-3 block'>© 2025 Luxride</a>
                    <div className='flex gap-3'>
                        <a href="" className='mb-3 block'>Terms</a>
                        <a href="" className='mb-3 block'>Privacy policy</a>
                        <a href="" className='mb-3 block'> Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
