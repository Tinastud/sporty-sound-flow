
import React from "react";
import { ArrowLeft, Bluetooth } from "lucide-react";
import { Link } from "react-router-dom";
import SoundControl from "@/components/SoundControl";
import BottomNavBar from "@/components/BottomNavBar";

const Sound = () => {
  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <ArrowLeft className="text-white" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Sound Control</h1>
          </div>
          <Bluetooth className="text-app-orange" />
        </div>

        <div className="bg-gradient-to-b from-app-orange/20 to-transparent rounded-3xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-lg font-semibold">Sport Earbuds</h3>
              <p className="text-white/60">Connected</p>
            </div>
            <div className="text-white/80 text-sm">
              85% <span className="ml-1">🔋</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-3xl p-5">
          <SoundControl />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Sound;
