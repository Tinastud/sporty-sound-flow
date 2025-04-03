
import React from "react";
import { Search } from "lucide-react";
import BottomNavBar from "@/components/BottomNavBar";
import { Input } from "@/components/ui/input";

const workoutCategories = [
  "Running",
  "Strength",
  "Cardio",
  "Yoga",
  "HIIT",
  "Cycling"
];

const soundPresets = [
  { name: "Workout Focus", desc: "Enhanced bass for motivation" },
  { name: "Running", desc: "Balanced sound with environmental awareness" },
  { name: "Meditation", desc: "Optimized for calm and clarity" }
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <h1 className="text-2xl font-bold text-white mb-6">Explore</h1>

        <div className="relative mb-6">
          <Input 
            className="bg-white/5 border-none text-white placeholder:text-white/40 pl-10 h-12"
            placeholder="Search workouts, sound presets..." 
          />
          <Search className="absolute left-3 top-3 text-white/40" size={20} />
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold">Workout Categories</h2>
            <span className="text-app-orange text-sm">See all</span>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {workoutCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white/5 text-white px-5 py-3 rounded-full whitespace-nowrap"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold">Sound Presets</h2>
            <span className="text-app-orange text-sm">See all</span>
          </div>
          
          <div className="space-y-3">
            {soundPresets.map((preset, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-xl p-4"
              >
                <h3 className="text-white font-medium mb-1">{preset.name}</h3>
                <p className="text-white/60 text-sm">{preset.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold">Popular Workouts</h2>
            <span className="text-app-orange text-sm">See all</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {["HIIT Challenge", "30-min Running", "Full Body Workout", "Core Strength"].map((workout, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-app-orange/30 to-transparent rounded-xl p-4 aspect-square flex flex-col justify-end"
              >
                <h3 className="text-white font-medium">{workout}</h3>
                <p className="text-white/60 text-xs">20-45 min</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Explore;
