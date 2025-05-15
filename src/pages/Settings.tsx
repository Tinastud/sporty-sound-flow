
import React, { useState } from "react";
import { Settings, Lock, Bell, Moon, User, Shield, QuestionCircle, ChevronRight, ToggleRight } from "lucide-react";
import BottomNavBar from "@/components/BottomNavBar";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast({
      title: darkMode ? "Light mode enabled" : "Dark mode enabled",
      duration: 2000,
    });
  };

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
    toast({
      title: notifications ? "Notifications disabled" : "Notifications enabled",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-app-background pb-24">
      <div className="pt-12 px-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <Settings className="text-white" size={20} />
        </div>
        
        <div className="space-y-6">
          {/* Account Settings */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Account</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <User className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Personal Info</span>
                </div>
                <ChevronRight className="text-white/40" size={20} />
              </div>
              
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <Lock className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Security</span>
                </div>
                <ChevronRight className="text-white/40" size={20} />
              </div>
            </div>
          </div>
          
          {/* Preferences */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Preferences</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <Bell className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Notifications</span>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={handleToggleNotifications}
                  className="data-[state=checked]:bg-app-orange"
                />
              </div>
              
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <Moon className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Dark Mode</span>
                </div>
                <Switch
                  checked={darkMode}
                  onCheckedChange={handleToggleDarkMode}
                  className="data-[state=checked]:bg-app-orange"
                />
              </div>
            </div>
          </div>
          
          {/* Support & About */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Support & About</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <QuestionCircle className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Help Center</span>
                </div>
                <ChevronRight className="text-white/40" size={20} />
              </div>
              
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <Shield className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Privacy Policy</span>
                </div>
                <ChevronRight className="text-white/40" size={20} />
              </div>
              
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div className="flex items-center">
                  <ToggleRight className="text-app-orange mr-3" size={20} />
                  <span className="text-white">Terms of Service</span>
                </div>
                <ChevronRight className="text-white/40" size={20} />
              </div>
            </div>
          </div>
          
          {/* App Information */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">App Version 1.0.0</p>
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Settings;
