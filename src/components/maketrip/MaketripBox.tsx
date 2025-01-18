import React from "react";
import { CiMail } from "react-icons/ci";

const MaketripBox = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="maketrip-box text-center">
      <div className="icon mx-auto rounded-full bg-[#F6F6F6] w-[50px] h-[50px] flex items-center justify-center">
        <Icon className="text-[#000] text-[25px]" />
      </div>
      <h4 className="my-3">{title}</h4>
      <p className="body-text">{description}</p>
    </div>
  );
};

export default MaketripBox;
