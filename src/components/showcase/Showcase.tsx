"use client";

import React, { useEffect, useState, useRef } from "react";

const Counter = ({ target, duration }: { target: number; duration: number }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const incrementTime = 20;
        const step = Math.ceil(target / (duration / incrementTime));

        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(interval);
    }, [hasAnimated, target, duration]);

    return (
        <div ref={ref}>
            <h2>{count} +</h2>
        </div>
    );
};

const Showcase = () => {
    return (
        <div data-aos="fade-up" className="showcase py-10 px-4 md:px-10" >
            <div className="showcase-main py-12 px-4 text-white bg-orange bg-cover bg-center rounded-md" style={{backgroundImage:"url(/images/bg-showcase.png)"}}>
                <div className="container">
                    <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-5 col-span-12 mb-4 text-center md:mb-0 md:text-left">
                            <h2>Showcase some impressive numbers.</h2>
                        </div>
                        <div className="md:col-span-7 col-span-12 md:flex justify-evenly">
                            <div className="count mb-4 top-move text-center md:mb-0">
                                <Counter target={285} duration={2000} />
                                <p className="body-text">Vehicles</p>
                            </div>
                            <div className="count mb-4 top-move text-center md:mb-0">
                                <Counter target={97} duration={2000} />
                                <p className="body-text">Awards</p>
                            </div>
                            <div className="count top-move text-center">
                                <Counter target={13000} duration={2000} />
                                <p className="body-text">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
