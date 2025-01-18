import React from "react";
import { FaUserFriends } from "react-icons/fa";

type CardFleetProps = {
    name: string;
    description: string;
    image: string;
    passengers: number;
    luggage: number;
};

const CardFleet: React.FC<CardFleetProps> = ({
    name,
    description,
    image,
    passengers,
    luggage,
}) => {
    return (
        <div className="card-fleet w-[354px] bg-white flex-none mx-2 p-6 border rounded-md border-gray">
            <h4>{name}</h4>
            <p className="body-text-small my-3">{description}</p>
            <img src={image} alt={name} />
            <div className="flex mt-6 justify-between">
                <div className="iconbox flex gap-3 items-center">
                    <div className="icon rounded-full bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center">
                        <FaUserFriends className="text-[#000]" />
                    </div>
                    <p className="font-semibold">Passengers {passengers}</p>
                </div>
                <div className="iconbox flex gap-3 items-center">
                    <div className="icon rounded-full bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center">
                        <FaUserFriends className="text-[#000]" />
                    </div>
                    <p className="font-semibold">Luggage {luggage}</p>
                </div>
            </div>
        </div>
    );
};

export default CardFleet;
