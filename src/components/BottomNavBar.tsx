
import React from "react";
import { Grid, Globe, Plus, Headphones, User, Calendar, MessageSquare, List } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-app-background to-transparent pt-4">
      <div className="flex items-center justify-around px-4 pb-6 relative">
        <Link to="/" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <Grid size={24} />
        </Link>
        <Link to="/explore" className="flex flex-col items-center text-white/80 hover:text-app-orange">
          <Globe size={24} />
        </Link>
        
        {/* Centered Plus Button with Dropdown */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-app-orange to-app-light-orange flex items-center justify-center cursor-pointer shadow-lg">
                <Plus size={26} className="text-white" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="bg-app-background border-app-orange/20 text-white"
              sideOffset={5}
              align="center"
            >
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer gap-2">
                <Calendar size={18} />
                <span>Schedule a meeting</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer gap-2">
                <MessageSquare size={18} />
                <span>Post on community</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer gap-2">
                <List size={18} />
                <span>Add a routine</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
