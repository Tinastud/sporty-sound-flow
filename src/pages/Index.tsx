
import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-app-background text-white pb-24">
      <div className="pt-12 px-5">
        <h1 className="text-2xl font-bold mb-6">Sport Sound Flow</h1>

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
