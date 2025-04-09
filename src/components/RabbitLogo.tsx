
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
          stroke="#20E3B2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="neon-border"
        />
        <path
          d="M35 40C38.5 40 41.5 37 41.5 33.5C41.5 30 38.5 27 35 27C31.5 27 28.5 30 28.5 33.5C28.5 37 31.5 40 35 40Z"
          fill="#20E3B2"
        />
        <path
          d="M65 40C68.5 40 71.5 37 71.5 33.5C71.5 30 68.5 27 65 27C61.5 27 58.5 30 58.5 33.5C58.5 37 61.5 40 65 40Z"
          fill="#20E3B2"
        />
        <path
          d="M36 55H64M36 55L50 70M64 55L50 70"
          stroke="#20E3B2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 30V10"
          stroke="#20E3B2"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RabbitLogo;
