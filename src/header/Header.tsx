"use client";
import Button from "@/button/Button";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header py-3 bg-dark fixed top-0 w-full z-50 text-dark md:text-white">
            <header>
                <nav className="container flex  items-center justify-between p-4 " aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-6 w-auto max-w-[196px]" src="/images/logo-white.svg" alt="Logo" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="-m-2.5 bg-orange rounded-md inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden items-center lg:flex lg:gap-x-12">
                        {/* <div className="relative">
                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="flex items-center gap-x-1 text-sm font-normal"
                                aria-expanded={isVisible ? "true" : "false"}
                            >
                                Product
                                 
                            </button>

                            <div
                                className={`${isVisible ? "block" : "hidden"} absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
                            >
                                <div className="p-4 text-dark">
                                    {["Analytics", "Engagement"].map((item) => (
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm font-normal hover:bg-gray-50" key={item}>
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                                </svg>
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold">
                                                    {item}
                                                </a>
                                                <p className="mt-1 text-gray-600">Description of {item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}

                        <a href="#" className="text-sm hover:text-orange font-normal">Home  </a>
                        <a href="#" className="text-sm hover:text-orange font-normal">About Us  </a>
                        <a href="#" className="text-sm hover:text-orange font-normal">Contact Us  </a>
                        <div className="flex gap-2">
                            <Button text="Sign Up" bg="bg-white" color="text-dark" />
                            <Button text="Book now" bg="bg-orange" color="text-white" />
                        </div>

                    </div>
                </nav>

                {/* Mobile menu */}
                <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`} role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-6 w-auto max-w-[196px]" src="/images/logoDark.svg" alt="Logo" />
                            </a>
                            <button type="button" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-white">
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {/* <div className="-mx-3">
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold hover:bg-gray-50"
                                            aria-controls="disclosure-1"
                                            aria-expanded={isVisible ? "true" : "false"}
                                            onClick={toggleVisibility}
                                        >
                                            Product
                                            <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div className={`mt-2 space-y-2 ${isVisible ? "block" : "hidden"}`} id="disclosure-1">
                                            {["Analytics", "Engagement"].map((item) => (
                                                <a
                                                    href="#"
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold hover:bg-gray-50"
                                                    key={item}
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    </div> */}
                                    <a href="#" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">Home</a>
                                    <a href="#" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">About Us</a>
                                    <a href="#" className="-mx-3 block rounded-lg text-white px-3 py-2 text-base font-semibold hover:bg-gray-50">Contact Us</a>
                                    <div className="flex gap-2">
                                        <Button text="Sign Up" bg="bg-white" color="text-dark" />
                                        <Button text="Book now" bg="bg-orange" color="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
