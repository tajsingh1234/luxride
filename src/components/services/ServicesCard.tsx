import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ServicesCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({ title, description, image }) => {
  return (
    <div
      className="h-[400px] relative flex justify-end items-end services-card bg-cover rounded-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hover-bg absolute top-0 left-0 right-0 bottom-0 rounded-md"></div>
      <div className="card-text text-white p-4 relative z-10">
        <h4>{title}</h4>
        <div className="card-info">
          <p className="mb-2">{description}</p>
          <div className="icon rounded-full border border-white w-[50px] h-[50px] flex items-center justify-center">
            <FiArrowUpRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
