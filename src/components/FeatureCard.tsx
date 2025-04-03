
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  bgColor: string;
  onClick?: () => void;
  active?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  bgColor, 
  onClick, 
  active = false 
}) => {
  return (
    <div 
      className={cn(
        "w-full rounded-3xl px-6 py-5 mb-4 cursor-pointer transition-all duration-200",
        active ? "scale-[1.02] shadow-lg" : "hover:scale-[1.01]"
      )}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  );
};

export default FeatureCard;
