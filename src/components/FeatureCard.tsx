
import React from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  navigateTo?: string;
  onClick?: () => void;
  active?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  navigateTo,
  onClick, 
  active = false 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };
  
  return (
    <div 
      className={cn(
        "w-full rounded-3xl px-6 py-5 mb-4 cursor-pointer transition-all duration-300 bg-gradient-to-r from-app-orange to-app-light-orange hover:from-app-dark-orange hover:to-app-orange",
        active ? "scale-[1.02] shadow-lg" : "hover:scale-[1.01]"
      )}
      onClick={handleClick}
    >
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  );
};

export default FeatureCard;
