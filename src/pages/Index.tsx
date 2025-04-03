
import React, { useState } from "react";
import BottomNavBar from "@/components/BottomNavBar";
import FeatureCard from "@/components/FeatureCard";
import Workout from "@/components/Workout";
import Nutrition from "@/components/Nutrition";
import SoundControl from "@/components/SoundControl";
import Schedule from "@/components/Schedule";

type ActiveSection = "workout" | "nutrition" | "sound" | "schedule" | null;

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);

  const toggleSection = (section: ActiveSection) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-app-background text-white pb-24">
      <div className="pt-12 px-5">
        <h1 className="text-2xl font-bold mb-6">Sport Sound Flow</h1>

        {/* Feature Cards */}
        <div className="mb-6">
          <FeatureCard 
            title="Today's move" 
            bgColor="#FF6B35" 
            onClick={() => toggleSection("workout")} 
            active={activeSection === "workout"}
          />
          <FeatureCard 
            title="Good Food" 
            bgColor="#FFD6C2" 
            onClick={() => toggleSection("nutrition")} 
            active={activeSection === "nutrition"}
          />
          <FeatureCard 
            title="Your Sound" 
            bgColor="#FF5733" 
            onClick={() => toggleSection("sound")} 
            active={activeSection === "sound"}
          />
          <FeatureCard 
            title="Your schedule" 
            bgColor="#FF5733" 
            onClick={() => toggleSection("schedule")} 
            active={activeSection === "schedule"}
          />
        </div>

        {/* Active Section Content */}
        {activeSection === "workout" && (
          <div className="mt-4 bg-black/30 rounded-3xl p-5">
            <Workout />
          </div>
        )}

        {activeSection === "nutrition" && (
          <div className="mt-4 bg-black/30 rounded-3xl p-5">
            <Nutrition />
          </div>
        )}

        {activeSection === "sound" && (
          <div className="mt-4 bg-black/30 rounded-3xl p-5">
            <SoundControl />
          </div>
        )}

        {activeSection === "schedule" && (
          <div className="mt-4 bg-black/30 rounded-3xl p-5">
            <Schedule />
          </div>
        )}
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Index;
