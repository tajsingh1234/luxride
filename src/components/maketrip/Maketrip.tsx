import React from "react";
import { FaCommentDollar,FaCar } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import MaketripBox from "./MaketripBox";

const Maketrip = () => {
  const maketripData = [
    {
      id: 1,
      icon: IoShieldCheckmarkSharp,
      title: "Safety First",
      description:
        "Both you and your shipments will travel with professional drivers. Always with the highest quality standards.",
    },
    {
      id: 2,
      icon: FaCommentDollar,
      title: "Prices With No Surprises",
      description:
        "We offer the most competitive pricing for all your travel needs. Affordable luxury at its best.",
    },
    {
      id: 3,
      icon: FaCar,
      title: "Private Travel Solutions",
      description:
        "Plan your trips as per your convenience with our flexible schedules and on-time service.",
    },
  ];

  return (
    <div className="maketrip py-16 md:py-20 px-4">
      <div data-aos="fade-up"  className="container">
        <h2 className="text-center mb-8 md:mb-12">Make Your Trip Your Way With Us</h2>
        <div className="grid gap-10 md:grid-cols-3 grid-cols-1">
          {maketripData.map((item) => (
            <MaketripBox
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maketrip;
