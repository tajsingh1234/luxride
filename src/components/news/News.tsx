"use client"
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './News.css';
import Newsbox from './Newsbox';
import { GoArrowUpRight } from 'react-icons/go';

const Newsdata = [
    {
        id: 1,
        name: "Escaping London for a relaxing long weekend",
        description: "Explore the picturesque countryside of England, such as the Cotswolds, Lake District, or Peak District.",
        image: "/images/news1.jpg",
        passengers: 4,
        luggage: 3,
    },
    {
        id: 2,
        name: "Discover the serene beauty of Scotland",
        description: "Visit the Highlands and explore Edinburgh's historic streets.",
        image: "/images/news1.jpg",
                passengers: 5,
        luggage: 4,
    },
    {
        id: 3,
        name: "A romantic getaway to Paris",
        description: "Enjoy the Eiffel Tower, Seine River cruises, and French cuisine.",
        image: "/images/news1.jpg",
        passengers: 2,
        luggage: 1,
    },
    {
        id: 4,
        name: "Exploring Italy's Amalfi Coast",
        description: "Experience the breathtaking coastal views and Italian culture.",
        image: "/images/news1.jpg",
        passengers: 4,
        luggage: 3,
    },
    {
        id: 5,
        name: "Road trip through the USA",
        description: "Travel across iconic routes like Route 66 and the Pacific Coast Highway.",
        image: "/images/news1.jpg",
        passengers: 4,
        luggage: 3,
    },
    {
        id: 6,
        name: "Experience the magic of Japan",
        description: "Visit Kyoto's temples, Tokyo's skyscrapers, and enjoy sushi culture.",
        image: "/images/news1.jpg",
        passengers: 4,
        luggage: 3,
    },
];

const News = () => {
    const [visibleCount, setVisibleCount] = useState(3); 

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3); 
    };

    return (
        <div className="News py-20 bg-dark px-4">
            <div className="container">
                <div className="flex text-white relative z-10 mb-10 justify-between">
                    <h2>Latest From News</h2>
                    <a href="#" className="font-semibold w-fit flex gap-2 items-center">
                        <span>More Fleet</span> <FiArrowUpRight />
                    </a>
                </div>

                <div className="news-latest grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Newsdata.slice(0, visibleCount).map((NewsD) => (
                        <Newsbox
                            key={NewsD.id}
                            name={NewsD.name}
                            description={NewsD.description}
                            image={NewsD.image}
                            passengers={NewsD.passengers}
                            luggage={NewsD.luggage}
                        />
                    ))}
                </div>

                {visibleCount < Newsdata.length && (
                    <div className="text-center mt-10 md:mt-20">
                        <button
                            onClick={handleLoadMore}
                            className="flex items-center mx-auto gap-2 bg-white text-dark hover:bg-orange hover:text-white ease-in duration-300 rounded py-4 px-8 font-semibold"
                        >
                            Load More <GoArrowUpRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
