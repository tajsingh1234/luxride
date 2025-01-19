import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

type CardnewsProps = {
    name: string;
    description: string;
    image: string;
    passengers: number;
    luggage: number;
};

const Newsbox: React.FC<CardnewsProps> = ({
    name,
    description,
    image,
    passengers,
    luggage,
}) => {
    return (
        <div>
            <div className="news-box text-white">
                <div className="news-image rounded-md mb-4 relative">
                    <img src={image} alt={name} className="w-full rounded-md" />
                    <div className="news-date rounded-md text-white absolute p-6 top-0 left-0 bottom-0 right-0">
                        <h2>
                            18 <span className="body-text block">April, 2024</span>
                        </h2>
                    </div>
                </div>
                <p className="body-text-small ">Car Rent</p>
                <h4 className='mt-4'>{name}</h4>
                <p className="body-text my-4">{description}</p>
                <div className="icon rounded-full border border-white w-[50px] h-[50px] flex items-center justify-center">
                    <FiArrowUpRight className="text-white" />
                </div>
            </div>
        </div>
    );
};

export default Newsbox;
