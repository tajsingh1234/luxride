"use client";

import React, { useEffect, useState } from "react";
import { GoChevronUp } from "react-icons/go";

const CircularScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false); 

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight; 
        const scrollPercentage = (scrollTop / docHeight) * 100;

        setScrollProgress(scrollPercentage);

        
        if (scrollTop > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    return (
        isVisible && ( 
            <div
                onClick={scrollToTop} 
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 9999,
                    width: "45px",
                    height: "45px",
                    cursor: "pointer", 
                }}
            >
                <div className="text-orange text-[30px] absolute top-[7px] left-[8px]">
                    <GoChevronUp />
                </div>

                <svg
                    width="45"
                    height="45"
                    viewBox="0 0 120 120"
                    style={{ transform: "rotate(-90deg)" }}
                >
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#ddd"
                        strokeWidth="8"
                    />

                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#E95440"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (scrollProgress / 100) * circumference}
                       
                    />
                </svg>
            </div>
        )
    );
};

export default CircularScrollProgress;
