
import React from "react";

interface RabbitLogoProps {
  className?: string;
}

const RabbitLogo: React.FC<RabbitLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <img src="/logo.png" alt="Rabbit Logo" className="h-full" />
    </div>
  );
};

export default RabbitLogo;
