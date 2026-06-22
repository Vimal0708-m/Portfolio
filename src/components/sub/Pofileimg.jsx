import React from "react";
import Bimal from "../../assets/Bimal.png";

const ProfileImg = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-80 h-80">

        {/* Rotating Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-yellow-500 to-cyan-500 animate-spin-fast p-1">
          <div className="w-full h-full rounded-full bg-slate-950"></div>
        </div>

        {/* Image */}
        <img
          src={Bimal}
          alt="Bimal"
          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full"
        />

      </div>
    </div>
  );
};

export default ProfileImg;