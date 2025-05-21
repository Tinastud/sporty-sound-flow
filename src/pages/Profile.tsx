
import React from "react";
import { 
  Settings, Award, ChevronRight, BarChart2, Activity, Battery, Watch, Headphones
} from "lucide-react";
import BottomNavBar from "@/components/BottomNavBar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <Link to="/settings">
            <Settings className="text-white hover:rotate-90 transition-transform duration-300 cursor-pointer" size={20} />
          </Link>
        </div>

        <div className="bg-white/5 rounded-2xl p-5 flex items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-app-orange/20 text-app-orange flex items-center justify-center text-xl font-bold mr-4">
            JD
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold">John Doe</h2>
            <p className="text-white/60">Fitness Enthusiast</p>
          </div>
          <div className="ml-auto">
            <div className="bg-app-orange/20 rounded-full px-3 py-1 flex items-center">
              <Award className="text-app-orange mr-1" size={14} />
              <span className="text-app-orange text-sm">Pro</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold mb-3">Stats</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Workouts", value: "24" },
              { label: "Calories", value: "12.4k" },
              { label: "Hours", value: "18.5" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-white font-semibold text-lg">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div className="flex items-center">
              <div className="bg-app-orange/20 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                <BarChart2 className="text-app-orange" size={20} />
              </div>
              <span className="text-white">Your Progress</span>
            </div>
            <ChevronRight className="text-white/40" size={20} />
          </div>
          
          <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
            <div className="flex items-center">
              <div className="bg-app-orange/20 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                <Activity className="text-app-orange" size={20} />
              </div>
              <span className="text-white">Workout History</span>
            </div>
            <ChevronRight className="text-white/40" size={20} />
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Connected Devices</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <div className="flex items-center">
                <div className="bg-app-orange/20 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <Watch className="text-app-orange" size={20} />
                </div>
                <div>
                  <h3 className="text-white">Sport Watch</h3>
                  <p className="text-white/60 text-xs">Connected</p>
                </div>
              </div>
              <div className="flex items-center">
                <Battery className="text-green-400 mr-1" size={18} />
                <span className="text-white/60">85%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <div className="flex items-center">
                <div className="bg-app-orange/20 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                  <Headphones className="text-app-orange" size={20} />
                </div>
                <div>
                  <h3 className="text-white">Sport Earbuds</h3>
                  <p className="text-white/60 text-xs">Connected</p>
                </div>
              </div>
              <div className="flex items-center">
                <Battery className="text-green-400 mr-1" size={18} />
                <span className="text-white/60">65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Profile;
