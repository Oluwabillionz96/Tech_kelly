import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <img
      src="/logo.jpeg"
      alt="Tech Kelly Logo"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
};

export default Logo;
