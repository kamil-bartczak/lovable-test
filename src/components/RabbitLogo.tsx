
import React from "react";

interface RabbitLogoProps {
  className?: string;
}

const RabbitLogo: React.FC<RabbitLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M50 10C32.5 10 20 22.5 20 40V70C20 82.5 30 90 42.5 90H57.5C70 90 80 82.5 80 70V40C80 22.5 67.5 10 50 10Z"
          stroke="#9C27B0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="35"
          cy="33.5"
          r="6"
          fill="#9C27B0"
          fillOpacity="0.6"
        />
        <circle
          cx="65"
          cy="33.5"
          r="6"
          fill="#9C27B0"
          fillOpacity="0.6"
        />
        <path
          d="M36 55H64M36 55L50 70M64 55L50 70"
          stroke="#9C27B0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 30V10"
          stroke="#9C27B0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RabbitLogo;
