
import React from "react";
import { Grid, Globe, Plus, Headphones, User } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-app-background to-transparent pt-4">
      <div className="flex items-center justify-around px-4 pb-6">
        <Link to="/" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <Grid size={24} />
        </Link>
        <Link to="/explore" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <Globe size={24} />
        </Link>
        <div className="relative -mt-10">
          <div className="absolute -top-1 -left-1 h-14 w-14 rounded-full bg-gradient-to-r from-app-orange to-app-light-orange flex items-center justify-center">
            <Plus size={26} className="text-white" />
          </div>
        </div>
        <Link to="/sound" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <Headphones size={24} />
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <User size={24} />
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
