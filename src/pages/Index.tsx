
import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import FeatureCard from "@/components/FeatureCard";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-app-background text-white pb-24">
      <div className="pt-12 px-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold title-gleam cursor-pointer">Sport Sound Flow</h1>
          <Link to="/settings">
            <Settings className="text-white hover:rotate-90 transition-transform duration-300 cursor-pointer" size={20} />
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mb-6">
          <FeatureCard 
            title="Today's move" 
            navigateTo="/workout"
          />
          <FeatureCard 
            title="Good Food" 
            navigateTo="/nutrition"
          />
          <FeatureCard 
            title="Your Sound" 
            navigateTo="/sound"
          />
          <FeatureCard 
            title="Your schedule" 
            navigateTo="/schedule"
          />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Index;
